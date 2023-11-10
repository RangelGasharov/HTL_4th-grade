import './App.css';
import TeamInfo from './components/TeamInfo';

function App() {
  return (
    <div className="App">
      <TeamInfo teamPlace="1" teamName="Bayern" teamIcon="https://i.imgur.com/jJEsJrj.png"
        teamPoints="28" teamGamesPlayed="10" teamGoalsScored="30" teamGoalsConceded="7"
        teamWins="9" teamDraws="1" teamLoses="0" />
    </div>
  );
}

export default App;
