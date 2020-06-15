import React from 'react';
import style from './card.module.css'
function Card({name,des,url,id})
{
    return(
        <div className={style.card}>
            <img src={`http://localhost:4000/images/${url}.jpeg`} alt={``}/>
            <h3><span className={style.col}>Name:</span>{name}</h3>
            <h3 className={style.col}>Description</h3>
            <h4>{des}</h4>
            {/*<h4>URl:{url}</h4>*/}
            {/*<h3>ID:{id}</h3>*/}
        </div>
    )

}
export default Card;
