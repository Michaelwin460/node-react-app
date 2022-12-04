import React, { useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom";

function List({data, setData, setInfo, info}){


    useEffect(() => {
        fetch('http://localhost:8000/files/')
        .then((Response) => {return Response.json()})
        .then((response) => {  
           setData(response) 
           console.log(response)
        })
    },[])


    const showInfo = async (event) => {
        await fetch(`http://localhost:8000/files/info/${event.target.name}`)
        .then((Response) => {return Response.json()})
        .then((response) => {  
            setInfo(response) 
            console.log(info)
        })
    }

    if(data){
        return (
        <nav style={{padding:'30px'}}>
            {data.map((data) => (
               <div key={data.name}>
               <Link name={data.name} to={`/info`} onClick={showInfo} > {`file name: ${data.name}, type: ${data.type}`}</Link>
               </div>
            ))}
            <Outlet/>
        </nav>)
    } else {
        <div>no content to show</div>
    }
}

export default List