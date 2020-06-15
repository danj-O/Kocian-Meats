import React from 'react'
import MeatItem from '../meat-item/MeatItem'

export default function MeatSection(props) {
  // console.log(props)
  return (
    <div id={props.isSpecial ? 'deal' : props.meatData.edges[0].node.meatType[0]}>
      <h1>
        {props.title}
      </h1>
      {
        props.meatData.edges.map(edge =>{
          return (
              <MeatItem key={edge.node.id} data={edge.node} linkFolder={props.linkFolder}/>
          )
        })
      }
    </div>
  )
}
