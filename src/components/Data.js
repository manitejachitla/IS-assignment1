import React, { useEffect} from 'react';
import Card from "./Card";
import style from './data.module.css'
function Data({data,start,end})
{
    useEffect(()=>
    {
        console.log(data)
        // data.slice(start,end)
    })
    return(
        <div className={style.grid}>
            {data.slice(start,end).map(item=><Card name={item.Name} des={item.Description} url={item.URL} id={item.ID}/>)}
        </div>
    )

}
export default Data;
