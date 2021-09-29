import React, { useState } from 'react';

import './App.css';
import Main from './components/Main'
import { Data } from './data'

function App() {
  const [data, setData] = useState(Data);

  const deleteNode = (node) => {
    let newData = [];
    const rootNode = data[0]
    deleteNodeFromTree(rootNode, node.id)
    newData[0] = rootNode;

    setData(newData)


  }
  const deleteNodeFromTree = (node, nodeId) => {
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
  const insertNode = (node,newNode) => {
    let newData = [];
    const rootNode = data[0]
    insertNodeIntoTree(rootNode, node.id,newNode)
    newData[0] = rootNode;

    setData(newData)


  }

  const insertNodeIntoTree=(node, nodeId, newNode) =>{
    if (node.id == nodeId) {
        // get new id
      	let n = 0;
        /** Your logic to generate new Id **/
       
        if (newNode) {
            newNode.items = [];
            if(!node.items)node.items=[];
            node.items.push(newNode);
        }

    } else if (node.items != null) {
        for (let i = 0; i < node.items.length; i++) {
            insertNodeIntoTree(node.items[i], nodeId, newNode);
        }

    }

}




  return (
    <div className="App">
      <Main data={data} deleteNode={deleteNode} insertNode={insertNode}/>

    </div>
  );
}

export default App;
