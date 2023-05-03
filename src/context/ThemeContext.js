import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = (theme) => {
    if (theme === "githubDark") {
      setTheme(false);
      updateTheme(false);
    } else {
      setTheme(true);
      updateTheme(true);
    }
  };

  useEffect(() => {
    const isTheme =
      localStorage.theme === "dracula" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dracula)").matches);
    setTheme(isTheme);
    updateTheme(isTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function updateTheme(theme) {
  if (theme) {
    document.documentElement.classList.add("theme");
    localStorage.theme = "dracula";
  } else {
    document.documentElement.classList.remove("theme");
    localStorage.theme = "githubDark";
  }
}

export const useTheme = () => useContext(ThemeContext);
