import React, { useEffect } from 'react'
import {Datas} from './Datas'

const ArrayComponent = () => {
    const [people, setPeople] = React.useState(Datas)
    const [name, setName] =React.useState('')
    const [value, setValue]= React.useState(0)
    const [size, setSize] = React.useState(window.innerWidth)
    const [users, setUsers]= React.useState([])
    const [thingArray, setThingArray] = React.useState(["thing 1", "thing 2"])
  const addItem= () =>{
    setThingArray(prevThingArray=>{
      return [...prevThingArray, `thing ${prevThingArray.length+1}`] })
  }
    
const thingElement = thingArray.map(things=><p key={things}>{things}</p>)

    console.log(size)
const checksize =()=>{
  
  setSize(window.innerWidth)
}
    useEffect(()=>{
      console.log("resize effect")
      window.addEventListener('resize', checksize)
      //return()=>{
       // window.removeEventListener('resize', checksize)
      //}
    },[])
    console.log("window resize")
      useEffect(()=>{
        console.log("useEffect render")
  if(value > 2){
    document.title= `new title (${value})`
  }
  console.log("re-render useEffect")
      },[value])

      useEffect(()=>{
        console.log("hello world")
      }, [])
    const ComplexIncrease =() =>{
      setTimeout(()=>{
  setValue(value+1)
      },2000)
    }
const isGoingOut = true;


    const handleChange =(e) =>{
        setName(e.target.value)
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //const names = {id:Math.floor(Math.random()*1000)};
            const names = {id:new Date().getTime().toString(), name};
            setPeople((name)=>{
              return [...name, names]
            });
            
           
        
        setName('')
        } 
 
    
    const remove = (id ) =>{
        let names = people.filter((name)=>
            name.id!==id
        )
        setPeople( names)
    }
  return (
    <div style={{backgroundColor:"#2222"}}>
    <form  onSubmit={handleSubmit} style={{background:"#2222"}}>
    <div>
    <p style={{margin:"5px"}}>
    <input type="text" onChange={handleChange} 
      value={name}  
    />
  <button type='submit' style={{background:"#ffff", color:"green", marginLeft:"5px"}}>+</button>
    </p>
 </div>
    
      {people.map((person,index)=>{
        const {id, name} =person;
     return(
        <div className='list' key={person.id} style={{backgroundColor:"white", width:"300px", margin:"5px"}}>
        <h4>{name}
        <button onClick={()=>remove(person.id)} style={{backgroundColor:"white" , color:"red", border:"none" }}>X</button></h4>
       
        </div>
     )
      }
      )}
       </form>
       <div style={{background:"red"}}>
      <h2>{value}</h2>
      <button onClick={ComplexIncrease}>ComplexIncrease</button>
      </div>
    
   <div>
      <h1>{value}</h1>
      <div style={{display:"flex", gap:"10px", alignItems:"center", justifyContent:"center"}}>
      <button onClick={()=> setValue(value+1)}>useEffect</button>
      <button onClick={()=> setValue(0)}>reset</button>
      <button onClick={()=> setValue(value-1)}>decrease</button>
      </div>
      
      </div>
      <>
        <h2>the width of window is {size}px</h2>
      </>

      <h3 style={{background:"white", widows:"100px", marginLeft:"400px", height:"100px", borderRadius:"50%"}}>{isGoingOut ? "yes" : "no"}</h3>
    <div>
    {thingElement}
      <button onClick={addItem}>addItem</button>
    </div>
     </div>
  )
}

export default ArrayComponent
