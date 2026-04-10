import React,{component,useState} from 'react'
import React from 'react'
import sample.css from CSS

export default function sample() {
  return (
    <div>sample</div>
  )
}

class Sample extends component{
  render(){
    <button
        className="counter"
        onClick={()=> this.props.setCount((count)=> count+1)}
        >
           count is {this.props.count}
        </button>
        <div>
          <button style={{backgroundColor:"indigo",color:"white",width:"100px",height:"30px"}}>First</button>
        </div>
        </div>
  }


  }
}
export default Sample

