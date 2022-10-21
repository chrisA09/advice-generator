import './App.css';
import Header from './Header';
import Quote from './Quote';
import Button from './Button';
import GetQuote from './GetQuote';

function App() {
  return (
    <div className="container">
          {/*
          header component
          quote component
          button component
          getQoute component
          */}
          <Header/>
          <Quote/>
          <Button/>
          <GetQuote/>
    </div>
  );
}
export default App;
