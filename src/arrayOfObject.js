import React, {useState} from 'react'
import { Datas } from './Datas'
const ArrayOfObject = () => {
    const [Name, setName] = useState(Datas)
    const remove = (id) =>{
       
            let people  = Name.filter((person)=> person.id !==id);
            
           setName(people)
    }
  return (
    <div>
      {Name.map((listname,index)=>{
        const {id, name} =listname;
        return(
            <div key={id} className='list' >

<h1 style={{background:"darkgray", marginLeft:"0", display:"flex", justifyContent:"space-between"}}>
{name}
<button className='btnid' onClick={()=>remove(id)} style={{background:"blue", marginLeft:"20px", color:"white", border:"none"}}>remove</button></h1>
            </div>
        )
      })}
    </div>
  )
}

export default ArrayOfObject
