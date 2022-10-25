import React from 'react'
import { useEffect,useState } from 'react';
import Button from './Button';

export default function GetQuote() {
  // fetching
  /*
  el fetching, que es como obtengo la data, se lo puede hacer en app.js y hacer bajar la data para donde la necesite.
  La id iria para header y advice iria para text o advice
  */
  function loadQuote(){
    fetch('	https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip));
  }
  // useState(hook) stores the data coming from the fetching
  const [advice, setAdvice] = useState([]) // empty array is the defualt state

  // useEffect(hook) is for make a request and update the page
  useEffect(()=> {loadQuote()}, [])// empty array => dependency array
 
  return (
    <div>
      <h1> {advice.advice} </h1>{/*advice variable refers to whatever that is in that state*/}
      <Button loadQuote = {loadQuote()}/>
    </div>
  )
}
