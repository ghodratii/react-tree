import React,{useState} from 'react';

import './App.css';
import Main from './components/Main'
import {Data} from './data'

function App() {
  const[data,setData]=useState(Data);

  const deleteNode=(node,hasChildren)=>{
    let newData=[];
    const rootNode=data[0]
    deleteNodeFromTree(rootNode, node.id)
    newData[0]=rootNode;
    // setData(data=>data.filter(item=>filtering(node,item)))
    
    setData(newData)
    // console.log(data)

  }
  const deleteNodeFromTree=(node, nodeId)=>{
    if (node.items != null) {
      for (let i = 0; i < node.items.length; i++) {
          let filtered = node.items.filter(f => f.id == nodeId);
          if (filtered && filtered.length > 0) {
              node.items = node.items.filter(f => f.id != nodeId);
              return;
          }
          deleteNodeFromTree(node.items[i], nodeId,);
          
      }
  }
  }
  

  return (
    <div className="App">
      <Main data={data} deleteNode={deleteNode}/>
     
    </div>
  );
}

export default App;
