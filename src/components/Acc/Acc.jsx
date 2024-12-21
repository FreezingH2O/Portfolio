import React ,{ useState } from "react";
import styles from "./Acc.module.css";
import history from "./info.js";
import { getImageUrl } from "../../utils.js";


export const Acc = () => {

  const [arr, setArr] = useState([true,true,true,true,true,true]);
  const handleClick = (id) => {

    const updatedArr = [...arr];
    updatedArr[id - 1] = !arr[id - 1];
    setArr(updatedArr); 
    //{console.log(updatedArr)}
  };
  const mouseOn= (id) => {

    const updatedArr = [...arr];
    updatedArr[id - 1] = false;
    setArr(updatedArr); 
    //{console.log(updatedArr)}
  };
  const mouseOff= (id) => {

    const updatedArr = [...arr];
    updatedArr[id - 1] = true;
    setArr(updatedArr); 
    //{console.log(updatedArr)}
  };
  
  return (
    <section className={styles.container} id="accomplishment">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
     
        {history.map((info, id) => <div key = {id} className={styles.infoContainer}>
           <div
                className={styles.historyItemDetails}
                onClick={() => handleClick(info.id) }
               // onMouseEnter={() => mouseOn(info.id)}
               // onMouseLeave={() => mouseOff(info.id)}
              >
                <h3>{info.name}</h3>
                <h4>{info.proName}</h4>
                <p>{info.year}</p>
                <p>{info.description}</p>
          </div>

          <div className={`${styles.picdis} ${arr[info.id-1] && styles.picOpen}`} style={{alignSelf:"center"}}>
          {console.log(arr[info.id-1])}
          {console.log(info.id-1)}
            <img 
            className={styles.pic}
            src ={getImageUrl(info.img)}
            />
          </div>
        </div>  
          )}
        </div>
    </section>
  );
};
