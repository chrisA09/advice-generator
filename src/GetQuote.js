import React from 'react'
import { useEffect,useState } from 'react';

export default function GetQuote() {
  
  function loadQuote(){
    fetch('	https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice));
  }
  
  const [advice, setAdvice] = useState([])
  useEffect(()=> {loadQuote()}, [])
 
  return (
    <div>
      <h1> {advice} </h1>
    </div>
  )
}
