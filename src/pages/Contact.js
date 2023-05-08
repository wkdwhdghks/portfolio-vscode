import CodeBlock from "../components/CodeBlock";
import CodeLine from "../components/CodeLine";
import EmailForm from "../components/EmailForm";
import styles from "./Contact.module.css";

const socialItems = [
  {
    social: "email",
    link: "wkdwhdghks97@gmail.com",
    href: "mailto:wkdwhdghks97@gmail.com",
  },
  {
    social: "github",
    link: "wkdwhdghks",
    href: "https://github.com/wkdwhdghks",
  },
  {
    social: "blog",
    link: "Hello jonghwan world",
    href: "https://wkdwhdghks.tistory.com/",
  },
  {
    social: "email",
    link: "jonghwan notion",
    href: "https://flat-beauty-6c6.notion.site/Front-end-developer-a5087929c65a494d89f3a2f84ab5ee1f",
  },
];

function Contact() {
  return (
    <>
      <p className={styles.title}>Contact with me! 🤙</p>
      <CodeBlock>
        <CodeLine>
          <span className={styles.socials}>.socials</span>
          {"{"}
        </CodeLine>
        {socialItems.map((item, index) => (
          <CodeLine key={index}>
            <span className={styles.social}>{item.social}:</span>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a>
            ;
          </CodeLine>
        ))}
        <CodeLine>{"}"}</CodeLine>
      </CodeBlock>

      <EmailForm />
    </>
  );
}

export default Contact;
