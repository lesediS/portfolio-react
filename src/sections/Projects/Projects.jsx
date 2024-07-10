import React from "react";
import styles from "./ProjectsStyles.module.css";
import MusicPlayer from "../../assets/musicplayer.png";
import News from '../../assets/news.png'
import TicTacToe from '../../assets/tictactoe.png'
import Chat from '../../assets/chatapp.png';
import CMS from '../../assets/Geeks4Learning-Logo-with-Slogan.png'
import ToDo from '../../assets/todolist.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={MusicPlayer}
          link="https://github.com/lesediS/musicplayer"
          h3="Music Player"
          p="Music app with Jetpack Compose"
        />

        <ProjectCard
          src={News}
          link="https://github.com/lesediS/news-app"
          h3="News App"
          p="News app with Jetpack Compose"
        />

        <ProjectCard
          src={Chat}
          link="https://github.com/lesediS/androidgeekschat"
          h3="Chat App"
          p="Chat app with Java"
        />

        <ProjectCard
          src={TicTacToe}
          link="https://github.com/lesediS/tictactoe"
          h3="Tic Tac Toe - 3 In A Row"
          p="Tic Tac Toe game with Jetpack Compose"
        />

        <ProjectCard
          src={CMS}
          link="https://github.com/lesediS/cms"
          h3="Content Management System"
          p="Content management system for learnership with React and Spring Boot"
        />

        <ProjectCard
          src={ToDo}
          link="https://github.com/lesediS/toDoList"
          h3="Content Management System"
          p="To Do list with JSF"
        />
      </div>
    </section>
    
  );
}

export default Projects;
