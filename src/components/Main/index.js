import React from "react";
import Branch from "../Branch";

const Main=({data,deleteNode})=>{
    return(
        <div>
            {data.map((item)=><Branch key={item.id} item={item} level={0} deleteNode={deleteNode}/>)}
        </div>
    );

}
export default Main;