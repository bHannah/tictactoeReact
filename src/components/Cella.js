import React from 'react'
import "./cella.css"

function Cella(props){
    function katt(){
        props.katt(props.index)
    }
    return(
        <div className="cella" onClick={()=>katt()}>{props.jel}</div>
    )}

export default Cella