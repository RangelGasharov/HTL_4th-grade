import './App.css';
import Button from './components/Button';
import DrinkList from './components/List';
import SendButton from './components/SendButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hallo
        <Button name="Paul" age="24" />
        <Button name="Marc" age="23" />
        <Button name="Mathias" age="1" />
        <DrinkList item1="Coffee" item2="Tea" item3="Beer" />
        <SendButton />
      </header>
    </div>
  );
}

export default App;
