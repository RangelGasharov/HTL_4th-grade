import styles from "./TeamInfo.module.css"

export default function TeamInfo(props) {
  return (

    <div className={styles.teamInfoContainer}>
      <div className={styles.teamPlace}>{props.teamPlace}</div>
      <div className={styles.teamName}>{props.teamName}</div>
      <div className={styles.teamIcon}>{props.teamIcon}</div>
      <div className={styles.teamPoints}>{props.teamPoints} Pts</div>
      <div className={styles.teamGameStatsContainer}>
        <div className={styles.teamGamesPlayed}>{props.teamGamesPlayed}</div>
        <div className={styles.teamGoalsScored}>{props.teamGoalsScored}</div>
        <div className={styles.teamGoalsConceded}>{props.teamGoalsConceded}</div>
        <div className={styles.teamWins}>{props.teamWins}</div>
        <div className={styles.teamDraws}>{props.teamDraws}</div>
        <div className={styles.teamLoses}>{props.teamLoses}</div>
      </div>
    </div>
  )

}
