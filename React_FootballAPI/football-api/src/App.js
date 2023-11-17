import './App.css';
import TeamInfo from './components/TeamInfo';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])

  const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
      result.json().then((data) => {
        setData(data)
      })
    })
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className="App">
      <div id="team-info">
        {data.map((element, index) =>
          <TeamInfo teamPlace={index + 1} teamName={element.teamName} teamIcon={element.teamIconUrl} teamPoints={element.points}
            teamGamesPlayed={element.matches} teamGoalsScored={element.goals} teamGoalsConceded={element.opponentGoals}
            teamWins={element.won} teamDraws={element.draw} teamLoses={element.lost} />)}
      </div>
    </div>
  );
}

export default App;
