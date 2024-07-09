import React from "react";
import styles from "./ProjectsStyles.module.css";
import MusicPlayer from '../../assets/musicplayer.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

        <a href="https://github.com/lesediS/musicplayer" target="_blank"  c>
          <img className="hover" src={MusicPlayer} alt="Music Player lgo"/>
          <h3>Music Player</h3>
          <p>Music streaming app with JetPack Compose</p>
        </a>
        
      </div>
    </section>
  );
}

export default Projects;
