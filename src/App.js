
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './loginpage';
//import Signuppage from './signpage';
import Home from './homepage';
import Program from './program';
import Header from './header';
import About from './about';

import Student from './student';
import Support from './support';
import './App.css'
import Joke from './Joke';
import JokeData from './JokeData';
import CardComponent from './CardComponent';
import dataComponent from './dataComponent';
import Booklist from './Booklist';
import Form2 from './Form2';
import ArrayComponent from './ArrayComponent';
import ArrayOfObject from './arrayOfObject';
import ObjectContact from './ObjectContact';
import Crud from './Crud.js';

function App() {
  
  const elementJoke = JokeData.map(joke=>{
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })
  const Cards =dataComponent.map(item =>{
    return(
      <CardComponent key={item.id}
      image={item.coverImg}
      rating={item.stat.rating}
      reviewCOunt={item.stat.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSport={item.openSpot}
/>
    )
  })
  return (
    <BrowserRouter>
    <div className="app">
    <Header/>
   {/**<Booklist/>
    {elementJoke}
    <ArrayOfObject/>
   
    <Form2/>

    <ArrayComponent/>
    <ObjectContact/>
    */}  {/**{Cards}**/}
      <Routes>
      
      <Route path='/' element={<Home/>}></Route>

      <Route path='program' element={<Program/>}></Route>
      <Route path='about' element={<About/>}>
      </Route>
      <Route path='Crud' element={ <Crud/>}>
      </Route>
      
    
      <Route path='student' element={<Student/>}></Route>
      <Route path='support' element={<Support/>}></Route>
      {/*<Route path='signpage' element={<Signuppage/>}></Route>*/}
       
    
      
       <Route path='loginpage' element={<Loginpage/>}></Route>
       
      </Routes>
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
