import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       hallo
        <Button name="Hans" age="17"/>
        <Button name="Paul" age="24"/>
        <Button name="Marc" age="23"/>
        <Button name="Mathias" age="1"/>
      </header>
    </div>
  );
}

export default App;
