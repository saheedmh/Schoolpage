import React from 'react'

function CardComponent(props) {
    let badgeText 
    if(props.openSpot===0){
        badgeText ="Sold Out"
    }else if (props.location){
        badgeText="online"
    }
    const card = {
        backgroundColor:"#2222",
        
        height:"100vh",
        display:"flex",
        
    }
  return (
    <div style={card}>
    <div>
      {/**{props.openspot===0} && <div className='badge' >sold out</div>**/}
      {badgeText && <div className='badge' > {badgeText} </div>}
      <img src={`../images/${props.image}`} alt="" style={{width:"200px", height:"200px"}} className='card-image' />
      <div className="card-stat">
        <img src="../images.star.png" className='card-star' alt="" />
        <span>({props.rating})</span>
        <span>({props.reviewCount})</span>
        <div className="grey">{props.location}</div>
        <p>
            <span>{props.title}</span>
            <span>{props.openSpot}</span>
            <span>{props.price}</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default CardComponent
