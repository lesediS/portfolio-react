import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import gmailLight from "../../assets/gmail-light.svg";
import gmailDark from "../../assets/gmail-dark.svg";

import whatsappLight from "../../assets/whatsapp-light.svg";
import whatsappDark from "../../assets/whatsapp-dark.svg";

import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'

import CV from "../../assets/Lesedi-Seleke.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  const gmailIcon = theme === "light" ? gmailLight : gmailDark;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const whatsappIcon = theme === "light" ? whatsappLight : whatsappDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colourModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile or Logo" />
        <img
          className={styles.colourMode}
          src={themeIcon}
          alt="Dark/Light theme"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Lesedi
          <br />
          Seleke
        </h1>
        <h2>Front and back end dev</h2>

        <span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=selekelesedi25@gmail.scom"
            target="_blank"
          >
            <img src={gmailIcon} alt="Send me an email." />
          </a>
          <a
            href="https://www.linkedin.com/in/lesedi-seleke-41523a150/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="Connect on LinkedIn." />
          </a>
          <a href="https://github.com/lesediS" target="_blank">
            <img src={githubIcon} alt="View my GitHub." />
          </a>
          <a href="https://wa.me/0694302866" target="_blank">
            <img src={whatsappIcon} alt="Reach out on WhatsApp." />
          </a>
        </span>

        <p className={styles.description}>Fullstack developer with a passion for app development.</p>

        <a href={CV} download>
          <button className="hover" target="_blank">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
