import React, { useState, useEffect } from 'react';
import TeamInfo from "../components/TeamInfo"
import LinkButton from '../components/LinkButton';

function TeamsPage() {
    const [teamsData, setTeamsData] = useState([]);

    const loadTeamsData = () => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
            result.json().then((data) => {
                setTeamsData(data);
            })
        })
    }

    useEffect(() => {
        loadTeamsData();
    }, [])

    return (
        <div>
            <LinkButton path="matches" text="Go to matches" />
            <div>
                {teamsData.map((element, index) =>
                    <TeamInfo teamPlace={index + 1} teamName={element.teamName} teamIconURL={element.teamIconUrl} teamPoints={element.points}
                        teamGamesPlayed={element.matches} teamGoalsScored={element.goals} teamGoalsConceded={element.opponentGoals}
                        teamWins={element.won} teamDraws={element.draw} teamLoses={element.lost} />)}
            </div>
        </div>
    );
}

export default TeamsPage;
