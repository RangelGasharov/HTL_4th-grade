import styles from "./RecentGames.module.css"

export default function RecentGames(props) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return (
        <div className={styles.recentGamesContainer}>
            <div className={styles.recentGamesTeam1}>
                <div className={styles.recentGamesTeamName}>{props.team1TeamName}</div>
                <div className={styles.recentGamesTeamImgContainer}><img className={styles.recentGamesTeamImg} src={props.team1IconURL} /></div>
                <div className={styles.recentGamesTeam1Result}>{props.team1Goals}</div>
            </div>

            <div className={styles.recentGamesTeam2}>
                <div className={styles.recentGamesTeamName}>{props.team2TeamName}</div>
                <div className={styles.recentGamesTeamImgContainer}><img className={styles.recentGamesTeamImg} src={props.team2IconURL} /></div>
                <div className={styles.recentGamesTeam2Result}>{props.team2Goals}</div>
            </div>
        </div>
    )
}