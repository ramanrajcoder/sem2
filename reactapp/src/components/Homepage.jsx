import React,{useState} from 'react'

function Homepage() {
    const[login,setLogin]=useState(false)
    if(login){
        return<><button on onClick={()=>setLogin(false)}>logout</button></>
    }else{
        return<><button on onClick={()=>setLogin(true)}>login</button></>
    }
return(
    {login?<button onClick={()=>setLogin(false)}>logout</button>:<button onclick={()=>setLogin(true)}>login</button>}
)

  
}

export default Homepage