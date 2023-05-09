import axios from "axios";
import { useEffect, useState } from "react";
import Note from "../components/Note";
import styles from "./Blog.module.css";

function Blog() {
  const [post, setPost] = useState([]);
  const [bgUrl] = useState([]);
  const encoded = encodeURIComponent("https://wkdwhdghks.tistory.com/rss");
  const API_KEY = process.env.REACT_APP_RSSTOJSON_API_KEY;

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${encoded}&api_key=${API_KEY}`
        );
        setPost(result.data.items);
        result.data.items.map((item) => {
          const desc = item.description;
          const url = desc.slice(
            desc.indexOf('data-url="') + 10,
            desc.indexOf('" data-lightbox=')
          );
          return bgUrl.push(`${url}`);
        });
      } catch (error) {
        console.log("Data load failed:" + error);
      }
    };
    getData();
  }, [API_KEY, bgUrl, encoded]);

  return (
    <div>
      <p className={styles.blogTitle}>Recent Posts from blog ✍️</p>
      <div className={styles.gridContainer}>
        {post.map((item, index) => (
          <div key={index} className={styles.post}>
            <a href={item.link} target="_black" rel="noopener noreferrer">
              <Note>
                <div className={styles.postContent}>
                  <div
                    className={styles.imgWrap}
                    style={{ backgroundImage: `url(${bgUrl[index]})` }}
                  />
                  <p className={styles.postTitle}>{item.title}</p>
                  <p className={styles.pubdate}>{item.pubDate}</p>
                </div>
              </Note>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
