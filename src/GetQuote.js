import React from 'react'
import { useEffect,useState } from 'react';
import Button from './Button';

export default function GetQuote() {
  // fetching
  function loadQuote(){
    fetch('	https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice));
  }
  // useState(hook) stores the data coming from the fetching
  const [advice, setAdvice] = useState([]) // empty array is the defualt state

  // useEffect(hook) is for make a request and update the page
  useEffect(()=> {loadQuote()}, [])// empty array => dependency array
 
  return (
    <div>
      <h1> {advice} </h1>{/*advice variable refers to whatever that is in that state*/}
      <Button onClick={loadQuote}/>{/* no funciona asi */}
    </div>
  )
}
