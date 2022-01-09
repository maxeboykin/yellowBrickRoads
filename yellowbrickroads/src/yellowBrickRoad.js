import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Node from './Node'


const YellowBrickRoad = () => {

  const [nodes, setNode] = useState([]);
  useEffect(() => {
    const nodes = [];
    for(let row = 0; row < 15; row++){
      const currentRow = [];
      for(let col = 0; col < 50; col++){
        currentRow.push([]);
      }
      nodes.push(currentRow);
    }
  }, []);


  return (
    <div>
      {nodes.map((row, index) => {
        return <div>
          {row.map((node, index) => <Node></Node>)}
          </div>
      })}
      <Node>Foo</Node>
    </div>
  )
}

export default YellowBrickRoad;
