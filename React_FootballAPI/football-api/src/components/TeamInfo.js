import styles from "./TeamInfo.module.css"

export default function TeamInfo(props) {
  return (
    <div className={styles.teamInfoContainer}>
      <div className={styles.teamPlace}><span>{props.teamPlace}</span></div>
      <div className={styles.teamName}>{props.teamName}</div>
      <div className={styles.teamIconContainer}><img className={styles.teamIcon} alt={props.teamName + "-Logo"} src={props.teamIconURL} /></div>
      <div className={styles.teamPoints}><span>{props.teamPoints}</span> {props.teamPoints === 1 ? "PT" : "PTS"}</div>
      <div className={styles.teamGameStatsContainer}>
        <div className={styles.teamGamesPlayed}><span>{props.teamGamesPlayed}</span>&nbsp;Pld</div>
        <div className={styles.teamGoalsScored}><span>{props.teamGoalsScored}</span>&nbsp;GS</div>
        <div className={styles.teamGoalsConceded}><span>{props.teamGoalsConceded}</span>&nbsp;GC</div>
        <div className={styles.teamWins}><span>{props.teamWins}</span>&nbsp;W</div>
        <div className={styles.teamDraws}><span>{props.teamDraws}</span>&nbsp;D</div>
        <div className={styles.teamLoses}><span>{props.teamLoses}</span>&nbsp;L</div>
      </div>
    </div>
  )
}