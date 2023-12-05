import './App.css';
import TeamInfo from './components/TeamInfo';
import React, { useState, useEffect } from 'react';
import UpcomingGames from './components/UpcomingGames.module';
import RecentGames from './components/RecentGames.module';

function App() {
  const [teamsData, setTeamsData] = useState([]);
  const [gamesData, setGamesData] = useState([]);

  const currentTime = new Date();
  let upcomingGamesArray = [];
  let recentGamesArray = [];
  let amountOfUpcomingGames = 2;
  let amountOfRecentGames = 2;

  gamesData.forEach(element => {
    if (element.matchIsFinished) {
      recentGamesArray.push(element);
    } else {
      upcomingGamesArray.push(element);
    }
  })

  const loadTeamsData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
      result.json().then((data) => {
        setTeamsData(data);
      })
    })
  }

  const loadGamesData = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
      result.json().then((data) => {
        setGamesData(data);
      })
    })
  }

  useEffect(() => {
    loadTeamsData();
  }, [])

  useEffect(() => {
    loadGamesData();
  }, [])

  return (
    <div className="App">
      <div className="header">
        <img src="./Allianz Arena.png" className="alliance-arena-img" />
        <div className="header-title"><span className="header-title-part-1">Bundes</span><span className="header-title-part-2">liga 1</span></div>
      </div>

      <div className="container">
        <div id="games-info">
          <div className="upcoming-games-title">Upcoming Games</div>
          {upcomingGamesArray.slice(0, amountOfUpcomingGames).map((element) =>
            <UpcomingGames team1TeamName={element.team1.teamName} team1IconURL={element.team1.teamIconUrl} upcomingGameDate={element.matchDateTime}
              team2TeamName={element.team2.teamName} team2IconURL={element.team2.teamIconUrl} />
          )}
          <div className="recent-games-title">Recent Games</div>
          {recentGamesArray.slice(-amountOfRecentGames).map((element) =>
            <RecentGames team1TeamName={element.team1.teamName} team1IconURL={element.team1.teamIconUrl}
              team1Goals={element.matchResults[1].pointsTeam1} team2Goals={element.matchResults[1].pointsTeam2}
              team2TeamName={element.team2.teamName} team2IconURL={element.team2.teamIconUrl} />
          )}
        </div>
        <div id="team-info">
          {teamsData.map((element, index) =>
            <TeamInfo teamPlace={index + 1} teamName={element.teamName} teamIconURL={element.teamIconUrl} teamPoints={element.points}
              teamGamesPlayed={element.matches} teamGoalsScored={element.goals} teamGoalsConceded={element.opponentGoals}
              teamWins={element.won} teamDraws={element.draw} teamLoses={element.lost} />)}
        </div>
      </div>
    </div>
  );
}

export default App;