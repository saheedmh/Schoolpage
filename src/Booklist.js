import React from 'react'


   const book =[
    {
        id:1,
        image:"team1.png",
    title:"how to be a achieve your goals",
    author:"wole soyinka"
   },
   
   {
    id:2,
    image:"team2.png",
title:"how to be a good dancer",
author:"davido"
}

] ;
export default function Booklist() {
    return(
        <section className='section' style={{display:"flex", gap:"10px" , justifyContent:"center", alignItems:'center'}}>
        {book.map((book)=>{
            // const {image, title, author} = book;
            //spread operator below
            return <BookItem key={book.id} {...book} ></BookItem >
            //<BookItem key={book.id} book={book} ></BookItem >
            
               //<BookItem image={image} title={title} author={author}></BookItem >
               //short cut
               
                
        })}
   </section>
   )
        }; 
const BookItem = ({image, title, author}) =>{
    //object distructuring for the props in the above parameter
    //console.log(prop)
     //const {image, title, author} = props;
    
    //const {image, title, author} = props.book;
    //with spread operator
    //const {image, title, author} = prop;
   
    return (
        <div style={{display:"flex" ,backgroundColor:"#2222"}}>
        <div>
            <img src={`../images/${image}`} alt="" />
            <h3 onClick={()=>console.log(title)}>{title}</h3>
            <p>{author}</p>
            <button >changeTitle</button>
            </div>
        </div>
    )
}
        


