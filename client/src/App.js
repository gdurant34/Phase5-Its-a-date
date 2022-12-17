import './App.css';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    fetch('/dayts')
    .then(r => r.json())
    .then(console.log)
  })



  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  );
}

export default App;
