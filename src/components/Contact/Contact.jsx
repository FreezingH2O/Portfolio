
import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact=()=>{
    return(
        <section id = "contact">
        <div className={styles.container}>
            <h1 className={styles.title}>Contact</h1>
            <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/email.png")} alt="Email icon" />
                <a href="airadajitauleeruk@gmail.com">airadajitauleeruk@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="Github icon" />
                <a href="https://github.com/FreezingH2O">github.com/FreezingH2O</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/airada-jitareeruk-4b8a13212/">linkedin.com/in/airada</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/discord.png")} alt="Discord icon"/>
                <a href="https://discord.com/channels/@me">discordapp.com/users/freezi_935</a>
            </li>
      </ul>
        </div>
        </section>
    )
}

