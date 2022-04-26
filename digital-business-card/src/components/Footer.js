import React, { useState } from "react";
import styles from "./Footer.module.css";
import twitterLogo from "../img/Twitter-logo.png";
import GithubLogo from "../img/Github-logo.png";
import GithubLogo_white from "../img/Github-logo-white.png";
import reactLogo from "../img/React-logo.png";
import instaLogo from "../img/Insta-logo.png";
import "../index.css";

export default function Footer() {
  const [IsHovered, setIsHovered] = useState(false);
  return (
    <footer className={styles.footer}>
      <div
        className={styles.socialMedia}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://github.com/janedoe"
        >
          <img
            src={!IsHovered ? GithubLogo : GithubLogo_white}
            alt="Click to open Jane's GitHub"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://react.com/janedoe"
        >
          <img
            src={reactLogo}
            alt="Click to open Jane's React"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://instagram.com/janedoe"
        >
          <img
            src={instaLogo}
            alt="Click to open Jane's Instagram"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://twitter.com/janedoe"
        >
          <img
            src={twitterLogo}
            alt="Click to open Jane's Twitter"
            className={styles.socialIcons}
          />
        </a>
      </div>
    </footer>
  );
}
