import React from "react";


const Node=({item, hasChildren , level, onToggle})=>{
    return(
        <div className='node' style={{paddingLeft:`${level*16}px`}}>
            {item.title}
            {hasChildren && <button className='collapse' onClick={onToggle}></button>}
        </div>
    )
}
export default Node;