import React from "react";
import Branch from "../Branch";

const Main=({data,deleteNode,insertNode})=>{
    return(
        <div>
            {data.map((item)=><Branch key={item.id} item={item} level={0} deleteNode={deleteNode} insertNode={insertNode}/>)}
        </div>
    );

}
export default Main;