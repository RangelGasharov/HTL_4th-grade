import React, { useState, useEffect } from 'react';
import LinkButton from '../components/LinkButton'
import RecentGames from '../components/RecentGames.module'
import UpcomingGames from '../components/UpcomingGames.module';

function MatchesPage() {
    const [gamesData, setGamesData] = useState([]);
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

    const loadGamesData = () => {
        fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
            result.json().then((data) => {
                setGamesData(data);
            })
        })
    }

    useEffect(() => {
        loadGamesData();
    }, [])


    return (
        <div>
            <div id="games-info">
                <LinkButton path="/" text="Go to teams" />
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
        </div>
    )
}

export default MatchesPage