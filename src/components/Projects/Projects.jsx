import React from "react";
import styles from "./Projects.module.css";
import {Box } from "./Box";
import projectsLi from "./projectsLi.js"

export const Projects=()=>{
    return ( <section id ="projects" className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <div  className={styles.projects}> 
            {projectsLi.map((projectEl,index)=><Box key={index} project={projectEl}/>

            )}
        </div>
    </section>
    )
}