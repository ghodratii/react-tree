import React from "react";


const Node=({item, hasChildren , level, onToggle})=>{
    return(
        <div className='node' style={{paddingLeft:`${level*16}px`}}>
            {item.title}
            {hasChildren && <i className="collapse fas fa-angle-down" onClick={onToggle}></i> }
        </div>
    )
}
export default Node;