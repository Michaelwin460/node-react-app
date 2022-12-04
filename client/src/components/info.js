import React, { useState } from "react";


function Info ({data, info}) {
    
    const [fileContent, getFileContent] = useState([]) 
    const fileShow = async () => {
        await fetch(`http://localhost:8000/files/show/${info.name}`)
        .then((response) => {
            if (response.status != 200) { throw new Error("Bad Server Response"); }
            return response.text();
        })
        .then((results) => {  
            getFileContent(results) 
            console.log(results)
        })
    }

    if(info){
        return(
            <div>
                <h2>{`name: ${info.name}`}</h2>
                <h2>{`type: ${info.type}`}</h2>
            <h2>{`size: ${info.size}`}</h2>
            <h2>{`creation: ${info.creation}`}</h2>
            <br/>
            {info.type !== 'folder' ? 
                <div>
                    <button onClick={fileShow}>show</button>
                    <button>rename</button>
                    <button>copy</button>
                    <button>delete</button>
                </div>
                : <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                </div> 
                }
                
            <h2>{fileContent ? fileContent : ''}</h2>
            {/* <iframe src={`http://localhost:8000/files/show/${info.name}` }title=""/> */}

            </div>
        )
    }else{
        return(
            <div>

            </div>
        )
}
    
}

export default Info