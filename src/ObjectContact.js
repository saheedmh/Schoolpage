import React from 'react'

const ObjectContact = () => {
    const [contact, setContact] = React.useState({
        firstName:'usman',
        lastName:"ahmed",
        phone:"070555555",
        email:"usman@gmail.com",
        isFavorite:false
    })
let contactFavorite =contact.isFavorite ? "Ismyfavorite" :"not myfavorite"
    const toggleFavorite = ()=>{
        setContact(prevcontact=>{
            return{
                ...prevcontact,
                isFavorite:!prevcontact.isFavorite
            }
        })
    }
  return (
    <div style={{background:"darkgray", marginTop:"10px"}}>
      <div className='contact-img'>
        <img src="../images/team1.png" alt=""  style={{marginTop:"10px"}}/>
      </div>
<div className="contact-info" style={{background:'#2222', width:"370px", margin:"auto", display:"flex", flexDirection:"column", gap:"10px"}}>
    <h4 style={{background:"white"}}>{contact.firstName} {contact.lastName}</h4>
    <p style={{background:"white"}}>{contact.phone}</p>
    <p style={{background:"white"}}>{contact.email}</p>
    <p style={{background:"white"}}>{contactFavorite}</p>
    <button className='favorite' onClick={toggleFavorite} style={{background:"blue", color:"white", border:"none"}}>
   hellow
    isFavorite</button>
    
</div>
    </div>
  )
}

export default ObjectContact
