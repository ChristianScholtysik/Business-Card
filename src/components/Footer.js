import React, { useState } from "react";
import styles from "./Footer.module.css";
import twitterLogo from "../img/Twitter-logo.png";
import GithubLogo from "../img/Github-logo.png";
import GithubLogo_white from "../img/Github-logo-white.png";
import instaLogo from "../img/Insta-logo.png";
import "../index.css";
import { Github, Instagram, Twitter, Linkedin } from "react-bootstrap-icons";

export default function Footer(theme) {
  // const [IsHovered, setIsHovered] = useState(false);

  return (
    <footer className={styles.footer}>
      {/* //   <div */}
      {/* //     className={styles.socialMedia}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)} */}
      <div className="socialMedia">
        <a>
          <Linkedin size={30} className="socialMedia" />

          {/* //   target="_blank"
        //   rel="noopener noreferrer"
        //   className={styles.links}
        //   href="https://github.com/janedoe"
        // >
        //   <img
        //     src={!IsHovered ? GithubLogo : GithubLogo_white}
        //     alt="Click to open Jane's GitHub"
        //     className={styles.socialIcons}
        //   /> */}
        </a>
      </div>
      <div className="socialMedia">
        <a>
          <Github size={30} className={styles.links} />
        </a>
      </div>
      <div className="socialMedia">
        <a>
          <Instagram size={30} className={styles.links} />
        </a>
      </div>
      <div className="socialMedia">
        <a>
          <Twitter size={30} className={styles.links} />
        </a>
      </div>
    </footer>
  );
}
