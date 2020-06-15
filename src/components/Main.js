import React,{useState,useEffect} from 'react';
import style from './main.module.css'
import axios from 'axios'
import Data from "./Data";
function Main()
{
    const [query,setquery]=useState('')
    const [val,setval]=useState(0)
    const [start,setstart]=useState(0)
    const [data,setdata]=useState([])
    const [entry,setentry]=useState(10)
    const [tot,settot]=useState(100)
    const les="<"
    const gre=">"
    const [end,setend]=useState(entry)
    useEffect(()=>
    {
        axios.get(`http://localhost:4000/product/search/?q=${query}&offset=0&limit=100`)
            .then(res=> {
                console.log(res.data)
                setdata(res.data)
                settot(res.data.length)
            })
    },[val])

    const handle_start=()=>
    {
        // setval(p=>p+1)
        if (start-entry<0)
        {
            setstart(0)
            setend(entry)
            setval(p=>p+1)
        }
        else if (end===tot)
        {
            setend(start)
            setstart(prevState => prevState-entry)
            setval(p=>p+1)
        }
        else
        {
            setstart(s=>s-entry)
            setend(s=>s-entry)
            setval(p=>p+1)
        }

    }
    const handle_end=()=>
    {
        // setval(p=>p+1)
        if (end+entry>tot)
        {
            if (end!==tot)
            {
                setstart(s=>s+entry)
                setval(p=>p+1)
            }
            setend(tot)
        }
        else
        {
            setstart(s=>s+entry)
            setend(s=>s+entry)
            setval(p=>p+1)
        }

    }
    return(
        <div>
            <h2 className={style.main}>Browse Products</h2>
            <div className={style.div}>
                <input type="text" onChange={
                    (e)=> {
                        setquery(e.target.value)
                        setval(pr=>pr+1)
                    }
                }/>
                <input type="submit" value={"search"} onClick={e=>{
                    setval(p=>p+1)
                    setstart(0)
                    setend(entry)
                }}/>

                <h2>total products:{tot}</h2>
                <h3>Entries per page:{entry}</h3>
                <h3>Showing products</h3>
                <h3>{start+1} to {end}</h3>
                <h2 onClick={()=>handle_start()} className={style.btn}>{les}</h2>
                <h2 onClick={()=>handle_end()} className={style.btn}>{gre}</h2>
            </div>
            <div>
                <Data data={data} start={start} end={end}/>
            </div>
        </div>
    )
}
export default Main;
