import React from "react";
import Branch from "../Branch";

const Main=({data})=>{
    return(
        <div>
            {data.map((item)=><Branch key={item.id} item={item} level={0} />)}
        </div>
    );

}
export default Main;