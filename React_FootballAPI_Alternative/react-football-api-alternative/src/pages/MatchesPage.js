import React, { useState, useEffect } from 'react';
import LinkButton from '../components/LinkButton'
import RecentGames from '../components/RecentGames.module'
import UpcomingGames from '../components/UpcomingGames.module';

function MatchesPage() {
    const [gamesData, setGamesData] = useState([]);
    let upcomingGamesArray = [];
    let recentGamesArray = [];
    let amountOfUpcomingGames = 10;
    let amountOfRecentGames = 10;

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
            <div>
                <LinkButton path="/" text="Go to teams" />
                <div className="text-4xl flex justify-center mt-10">Upcoming Games</div>
                <div className="grid divide-x grid-cols-2 my-10">
                    {upcomingGamesArray.slice(0, amountOfUpcomingGames).map((element) =>
                        <UpcomingGames team1TeamName={element.team1.teamName} team1IconURL={element.team1.teamIconUrl} upcomingGameDate={element.matchDateTime}
                            team2TeamName={element.team2.teamName} team2IconURL={element.team2.teamIconUrl} />
                    )}
                </div>
                <div className="text-4xl flex justify-center">Recent Games</div>
                <div className="grid divide-x grid-cols-2 my-10">
                    {recentGamesArray.slice(-amountOfRecentGames).map((element) =>
                        <RecentGames team1TeamName={element.team1.teamName} team1IconURL={element.team1.teamIconUrl}
                            team1Goals={element.matchResults[1].pointsTeam1} team2Goals={element.matchResults[1].pointsTeam2}
                            team2TeamName={element.team2.teamName} team2IconURL={element.team2.teamIconUrl} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MatchesPage