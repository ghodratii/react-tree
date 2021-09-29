import React,{useState} from "react";
import Node from '../Node';

const Branch=({item,level,deleteNode,insertNode})=>{
    const [collapsed,setCollapsed]= useState(false);
    const hasChildren = item.items && item.items.length !== 0;
    const createNested=()=>{
        if(hasChildren){
            const newLevel=level+1;
            return item.items.map((child)=>{
                return <Branch key={child.id} item={child} level={newLevel} deleteNode={deleteNode} insertNode={insertNode}/>
            })
        }
        return null;
    };
    const toggleCollapsed=()=>{
        setCollapsed(prev=>!prev);
    }
    return(
        <>
        <Node
        item={item}
        collapsed={collapsed}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleCollapsed}
        deleteNode={deleteNode}
        insertNode={insertNode}
         />
        {collapsed && createNested()}
        </>
    )
}
export default Branch;