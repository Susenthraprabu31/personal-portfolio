import React from "react";

import styles from "./Projects.module.css";

import projects from "../Data/projects.json";
import ProjectsCard from "./ProjectCards";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectsCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
