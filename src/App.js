import React, { useState } from 'react'

const App = () => {
    const [posList, setPosList] = useState([])

    const handleClick=()=>{
        setPosList([...posList,{
            x:500*Math.random(),
            y:500*Math.random(),
            color:`#${Math.floor(Math.random()*16777215).toString(16)}`}
    ])
    }
    return (
        <div style={{"textAlign":'center'}}>
            <header style={{
                "padding":"60px",
                "textAlign":"center",
                "background":"#999",
                "color":"white",
                "fontSize":"50px"}
            }>Random Color Tile Maker</header>
            <div style={{
                position:'relative',
                width:550,
                height:550,
                margin:'0 auto'
            }}>
            {posList.map((value,index)=>{
                return <div style={{
                    position:'absolute',
                    width:50,
                    height:50,
                    backgroundColor:value.color,
                    opacity:0.8,
                    left:value.x,
                    top:value.y
                }}></div>
                
            })}
            </div>
            <button style={{
                "padding":"16px 62px",
                "boxShadow":"0px 0px 12px -2px rgba(0,0,0,0.5)",
                "lineHeight":"1.25",
                "background":"#999",
                "textDecoration":"none",
                "color":"white",
                "fontSize":"20px",
                "textTransform":"uppercase",
                "position":"relative",
                "overflow":"hidden"}}
             onClick={handleClick}>Click!</button>
        </div>
    )
}

export default App
