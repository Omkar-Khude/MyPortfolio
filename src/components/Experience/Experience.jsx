import React from "react";
import styles from "./Experience.module.css";
import htmlIcon from "../assets/skills/html.png"
import cssIcon from "../assets/skills/css.png"
import reactIcon from "../assets/skills/react.png"
import javaScriptIcon from "../assets/skills/javascript.png"
import javaIcon from "../assets/skills/java.png"
import mongoDBIcon from "../assets/skills/mongodb.png"
import mySqlIcon from "../assets/skills/mysql.png"

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.content}>
        
        {/* Skills Section */}
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={htmlIcon} alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={cssIcon}alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={reactIcon}alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={javaScriptIcon} alt="Javascript" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={javaIcon} alt="Java" />
            </div>
            <p>Java</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={mongoDBIcon}alt="MongoDB" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={mySqlIcon} alt="Mysql" />
            </div>
            <p>MySQL</p>
          </div>
        </div>

        {/* History Section */}
        {/* <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img src="history/google.png" alt="Google Logo" />
            <div className={styles.historyItemDetails}>
              <h3>Software Engineer, Google</h3>
              <p>Sept, 2022 - Present</p>
              <ul>
                <li>Worked on Google Maps</li>
                <li>Reduced load times by 50%</li>
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img src="history/microsoft.png" alt="Microsoft Logo" />
            <div className={styles.historyItemDetails}>
              <h3>UI Designer, Microsoft</h3>
              <p>Aug, 2021 - Aug, 2022</p>
              <ul>
                <li>Worked on Windows 11</li>
                <li>Designed the control panel</li>
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img src="history/netflix.png" alt="Netflix Logo" />
            <div className={styles.historyItemDetails}>
              <h3>SWE Intern, Netflix</h3>
              <p>Apr, 2020 - Jun, 2020</p>
              <ul>
                <li>Worked on component library</li>
                <li>Helped create UI components</li>
              </ul>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
};
