import React from "react";


const Node=({item, hasChildren , level, onToggle,deleteNode,insertNode})=>{
    return(
        <div className='node' style={{paddingLeft:`${level*16}px`}}>
            {item.title}
            {hasChildren && <i className="collapse fas fa-angle-down" onClick={onToggle}></i> }
            {item.title!=='RootFolder' &&  <>
            <i className="collapse far fa-trash-alt" 
            onClick={()=>deleteNode(item)}></i>
            <i className="collapse fas fa-plus" onClick={()=>insertNode(item,{title:`${item.title}child${item.items?item.items.length:0}`,id:`${item.id}n${item.items?item.items.length:0}`})}></i>
            </>}
           


        </div>
    )
}
export default Node;