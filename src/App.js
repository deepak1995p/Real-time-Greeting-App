import React from 'react';
import './App.css';

function App() {
   let currTime = new Date(2020,5,24,16);
   currTime = currTime.getHours();
   let greeting = '';
   const cssstyle ={};

   if(currTime >= 0 && currTime < 12){
     greeting = 'Good Morning';
     cssstyle.color=' green';
   } 
   else if(currTime >= 12 && currTime <= 15){
     greeting = 'Good Afternoon';
     cssstyle.color=' yellow';
   }
   else if(currTime > 15 && currTime <= 20){
     greeting = 'Good Evening';
     cssstyle.color=' orange';
   }
   else{
     greeting = 'Good Night';
     cssstyle.color='darkblue';
   }

  return (
    <div>
        <h1> Hello Sir, <span style = {cssstyle}>{greeting}</span></h1>
      
    </div>
  )
}

export default App
