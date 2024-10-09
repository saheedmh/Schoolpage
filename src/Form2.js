import React, {useState} from 'react'

function Form2() {
    const [name, setName] =useState('')
    const [email, setEmail] = useState('')
    const [people, setpeople] = useState([])
    const handleSubmit =(e)=>{
  e.preventDefault()
  if(name && email){
  const person = {id:new Date().getTime().toString(), name, email};
  setpeople((people)=>{
    return [...people, person]
  });
  setName('');
  setEmail('')
  }else{
    console.log("empty")
  }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="nameId">FirstName</label>
        <input type="text" id='nameId'
         name='firstname'
         value={name}
        
         onChange={(e) => setName(e.target.value)}
         />
      </div>
        <br />

      <div className="form-control">
        <label htmlFor="input-id"></label>
        <input type="text" id='emailId'
         name='email'
         value={email}
        onChange={(e) => setEmail(e.target.value)}
         />
      </div>

      <button>addperson</button>
      </form>
{people.map((person, index)=>{
    const {id, name, email } =person;
    return (
        <div className='item'>
<h4>{name}</h4>
<p>{email}</p>
</div>
     )  ;
})}
    </div>
  )
}

export default Form2
