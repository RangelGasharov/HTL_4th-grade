import './App.css';
import { Canvas } from './components/Canvas.js';
import GiftBox from './components/GiftBox';


function App() {
  return (
    <div className="App">
      <GiftBox></GiftBox>
      <Canvas width={1600} height={700} />
    </div>
  );
}

export default App;
