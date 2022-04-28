import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../img/Profile_Picture.jpg";
import emailLogo from "../img/Email-logo.png";
import linkendinLogo from "../img/LinkedIn-logo.png";
import "../index.css";

export default function Info(theme) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.avatar} src={ProfilePicture} alt="Jane Doe" />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Jane Doe</h1>
        <p className="title" id="title-dark">
          Fullstack Frontend Developer
        </p>
        <p className={styles.small}>JaneDoe.com</p>
        <div className={styles.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.email}`}
            href="mailto:janedoe@test.de.com"
          >
            <img className={styles.icons} src={emailLogo} alt="" /> Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.linkedin}`}
            href="https://www.linkedin.com/in/janedoe/"
          >
            <img className={styles.icons} src={linkendinLogo} alt="" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
