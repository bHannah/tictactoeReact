import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';
import { useState } from 'react';

function App() {
  //state
  const [lista, setLista]=useState([" "," "," "," "," "," "," "," "," "])
  const [lepes,setLepes]=useState(0)
  function katt(adat){
    const slista=[...lista]
    if(lepes%2==0){
      slista[adat] = "X"
    }else{
      slista[adat] = "O"
    }
    
    let sv=lepes
    sv++
    setLepes(sv)

    setLista([...slista])

    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt}/>

      </article>
      <footer>Both Sella</footer>
    </div>
  );
}

export default App;
