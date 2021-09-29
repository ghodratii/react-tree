import React from "react";


const Node=({item, hasChildren , level, onToggle,deleteNode})=>{
    return(
        <div className='node' style={{paddingLeft:`${level*16}px`}}>
            {item.title}
            {hasChildren && <i className="collapse fas fa-angle-down" onClick={onToggle}></i> }
            {item.title!=='RootFolder' &&  <>
            <i className="collapse far fa-trash-alt" 
            onClick={()=>deleteNode(item,hasChildren)}></i>
            <i className="collapse fas fa-plus"></i>
            </>}
           


        </div>
    )
}
export default Node;