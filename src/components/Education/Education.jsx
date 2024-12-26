
import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css"

export const Education = ()=>{
    const [pic,setPic] = useState(true);
    return(
        <section id="education" className={styles.container}>
            <h1 className={styles.title}>Education</h1>
            <div className={styles.content}>
            <img
          src={ pic? getImageUrl("about/image.jpeg"):getImageUrl("about/sy.jpg")}
          alt="school picture"
          className={styles.aboutImage}
        />
            <ul className={styles.infoLi}>
                <li className={styles.fEl} onMouseEnter={() => setPic(true)}>
                <img
          src={getImageUrl("about/school.png")} alt="icon"
          className={styles.icon}
        />
                    <h3>Chulalongkorn<br/>University</h3>
                    <p>Bachelor of Engineering |<br/>Computer Engineering <br/>and Digital Technology</p><br/>
                    <p>First-year student</p>
                </li>
                <li  onMouseEnter={() => setPic(false)}>
                <img
          src={getImageUrl("about/book.png")} alt="icon"
          className={styles.icon2}
        />
                    <h3>  Sa-Nguan<br/>Ying<br/>School</h3>
                    <ul>
                        <li > <img
          src={getImageUrl("about/bookmark.png")} alt="icon"
          className={styles.icon3}
        />
                            <p style={{whiteSpace: "nowrap" }}>International Program<br/>Education Hub<br/>| Grade 10-12</p><br/>
                            <p>GPA: 3.99 / 4.0</p>
                        </li>
                        <li>
                        <img
          src={getImageUrl("about/bookmark.png")} alt="icon"
          className={styles.icon3}
        />
                            <p>English Program | Grade 7-9</p><br/>
                            <p>GPA: 3.99 / 4.0</p>
                        </li>
                    </ul>
                </li>
            
            </ul>
            </div>
        </section>
    )
}