import React, { useState } from 'react'
import './style/crud.css'
function Crud() {
    const [name, setName] = useState("")
    const [allData, setallData] = useState([])
    const [show, setshow] = useState(false)
const [edit, setEdit] = useState()

    const handleAdd =() =>{
        //if(name.length!==0){
        setallData(newdata => [...newdata, name])
        setName("")
    //}
}
    const handleEdit = (i)=>{
  setName(allData[i])
  setshow(true)
  setEdit(i)
    }
    const handledelete =(index)=>{
        allData.splice(index, 1)
        setallData([...allData])
      }
    
const handleUpdate = ()=>{
 allData.splice(edit, 1, name)
 setallData([...allData])
 setshow(false)
 setName("")
}
  return (
    <div className='crud' style={{marginBottom:"50px"}}>
<h1>create , read, update and Delete</h1>
<div>
      <input type="text"  value={ name} onChange={(e) => setName(e.target.value)} />
    {!show?<button onClick={handleAdd}>add</button>:
    <button onClick={handleUpdate}>update</button>}
    </div>
    {allData.map((val, i)=>{
       return( 
       <div>
  <p style={{backgroundColor:"#f3f3f3", display:"flex", justifyContent:"space-around"}}>{val}
  <button className='edit' style={{border:"none"}} onClick={() =>handleEdit(i)}>Edit</button>
  <button className='delete' onClick={()=> handledelete(i)}>Delete</button>
  </p>

        </div>
       )
    }
    )
    }
    </div>
  )
}

export default Crud
