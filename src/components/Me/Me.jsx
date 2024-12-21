import React from "react";
import styles from "./Me.module.css"
import { getImageUrl } from "../../utils";

export const Me=()=>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>Airada Jitareeruk</h1>
                <p>I'm a first year computer engineering student at Chulalongkorn University.</p>
                <a href="#contact">Contact Me</a>
            </div>
          
            <img className={styles.mypic} src={getImageUrl("myPic/myPic.jpg")}alt="me" />
             <div className={styles.eff2}/>
        </section>
    )
}