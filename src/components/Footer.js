import React from "react";
import styles from "./Footer.module.css";
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
      </div>
      <div className="socialMedia">
        <Github size={30} className={styles.links} />
      </div>
      <div className="socialMedia">
        <Instagram size={30} className={styles.links} />
      </div>
      <div className="socialMedia">
        <Twitter size={30} className={styles.links} />
      </div>
    </footer>
  );
}
