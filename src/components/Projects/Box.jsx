import React from "react";
import styles from "./Box.module.css";
import { getImageUrl } from "../../utils";

export const Box=({ project: { title, image, description, demo, source }})=>{
  const check = (demo==="")
    return (
        <div className={styles.container}>
          <img
            src={getImageUrl(image)}
            alt={`${title} project`}
            className={styles.image}
          />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div  className={styles.links}>
            <a className={`${styles.demo} ${(!check)&& styles.demoOpen}`} href={demo}>Demo</a>
            <a  className={styles.source} href={source}>Source</a>
          </div>
         
        </div>
      );
}