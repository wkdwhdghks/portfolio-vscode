import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../components/EmailForm.module.css";

function EmailForm() {
  const [sendMsg, setSendMsg] = useState("Send");
  const form = useRef();
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setSendMsg("Sending mail");
    emailjs
      .sendForm(
        `${EMAILJS_SERVICE_ID}`,
        `${EMAILJS_TEMPLATE}`,
        form.current,
        `${EMAILJS_PUBLIC_KEY}`
      )
      .then(() => {
        setSendMsg("Succese!");
        for (let i = 0; i < 4; i++) {
          form.current[i].value = "";
        }
      })
      .catch(() => {
        setSendMsg("Failed..");
      })
      .finally(() => {
        setTimeout(() => {
          setSendMsg("Send");
        }, 2000);
      });
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Send Email 📨</p>
      <p className={styles.subTitle}>
        메일을 보내주시면, 평일 기준 3일 이내에 답장 드릴게요!
      </p>
      <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
        <div className={styles.formSubContainer}>
          <div className={styles.inputContainer}>
            <label>Name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
              autoComplete="off"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="메일을 입력해주세요."
              autoComplete="off"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label>Subject</label>
            <input
              className={styles.input}
              type="text"
              name="subject"
              placeholder="제목을 입력해주세요."
              autoComplete="off"
              required
            />
          </div>
        </div>

        <div className={styles.formSubContainer}>
          <div className={styles.inputContainer}>
            <label>Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="내용을 입력해주세요."
              autoComplete="off"
              required
            />
          </div>

          <button className={styles.button}>{sendMsg}</button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
