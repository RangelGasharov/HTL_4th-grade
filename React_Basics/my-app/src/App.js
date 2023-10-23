import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import DrinkList from './components/DrinksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hallo
        <Button name="Paul" age="24" />
        <Button name="Marc" age="23" />
        <Button name="Mathias" age="1" />
        <DrinkList drink1="Coffee" drink2="Tea" drink3="Beer" />
      </header>
    </div>
  );
}

export default App;
