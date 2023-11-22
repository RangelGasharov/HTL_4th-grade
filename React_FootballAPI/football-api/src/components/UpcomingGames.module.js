import styles from "./UpcomingGames.module.css"

export default function UpcomingGames(props) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return (
    <div className={styles.upcomingGamesContainer}>
      <div className={styles.upcomingGamesTeamName}>{props.team1TeamName}</div>
      <div className={styles.upcomingGamesTeamImgContainer}><img className={styles.upcomingGamesTeamImg} src={props.team1IconURL} /></div>

      <div className={styles.upcomingGameDate}>{new Date(props.upcomingGameDate).toLocaleDateString(options, { hour: '2-digit', minute: '2-digit' })}</div>

      <div className={styles.upcomingGamesTeamName}>{props.team2TeamName}</div>
      <div className={styles.upcomingGamesTeamImgContainer}><img className={styles.upcomingGamesTeamImg} src={props.team2IconURL} /></div>
    </div>
  )
}