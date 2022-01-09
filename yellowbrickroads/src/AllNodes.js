import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Node from './Node'


const AllNodes = () => {

  const [bricks, setBricks] = useState([]);
  useEffect(() => {
    const nodes = [];
    for(let row = 0; row < 5; row++){
      const currentRow = [];
      for(let col = 0; col < 10; col++){
        currentRow.push([]);
      }
      nodes.push(currentRow);
      setBricks(nodes);
    }
  }, []);


  return (
    <div className="grid">
      {bricks.map((row, index) => {
        return <div key={index}>
          {row.map((node, index) => <Node key={index}></Node>)}
          </div>
      })}
    </div>
  )
}

export default AllNodes;
