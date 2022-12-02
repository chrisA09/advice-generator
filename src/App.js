import "./App.css";
import Header from "./Header";
import Quote from "./Quote";
import { useEffect, useState } from "react";
import Button from "./Button";
import History from "./History";

function App() {
  function loadQuote() {
    setIsLoading(true); // arranca por dafault en true
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setAdvices([...advices], data.slip);
        setIsLoading(false); // llega el fetch y cambia de estado a false
      });
  }

  const [advice, setAdvice] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  // Historial
  const [advices, setAdvices] = useState([]);

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <div className="container">
      <Header id={advice.id} />
      {isLoading ? <p>Loading...</p> : <Quote advice={advice.advice} />}
      {/*render condicional de del texto que viene por fetch*/}
      <Button loadQuote={loadQuote} isLoading={isLoading} />
      {isClicked ? (
        <History advices={advices} />
      ) : (
        <button
          onClick={() => {
            setIsClicked(true);
          }}
        >
          History
        </button>
      )}
    </div>
  );
}
export default App;

/*
Historial:
esta haciendo un solo fetching, y guarda lo mismo en dos lados distintos
cuando apreto el historial esta fetcheando tambien y no tiene que ser 

forma2:
guardar todo como viene en un array y en quote renderizar siempre el ultimo item del array
  
*/
/*
Falta:
.estilos c/tailwind.
.comentar codigo para saber que hace cada cosa.
Feature para agregar:
.historial que guarde la data de cada advice(id y texto)
.lo que hace es guardar en state(con ...spread) cada fecth que viene y despues renderiza la lista con map
*/
