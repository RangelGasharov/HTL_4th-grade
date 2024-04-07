export default function TeamInfo(props) {
  return (
    <div className="grid grid-cols-12 bg-teaminfo-default p-2 relative items-center">
      <div className=" bg-gradient-to-r from-orange-500 to-amber-700 font-bold flex items-center content-center"><span>{props.teamPlace}</span></div>
      <div className="flex content-start col-span-3 font-semibold">{props.teamName}</div>
      <div className="flex items-center justify-center content-center col-span-2"><img className="max-w-20 max-h-20" alt={props.teamName + "-Logo"} src={props.teamIconURL} /></div>
      <div className="font-semibold text-lg col-span-2"><span>{props.teamPoints}</span> {props.teamPoints === 1 ? "PT" : "PTS"}</div>
      <div className="grid grid-cols-6 gap-14">
        <div className="flex content-center items-center font-light"><span className="font-bold">{props.teamGamesPlayed}</span>&nbsp;Pld</div>
        <div className="flex content-center items-center font-light"><span className="font-bold">{props.teamGoalsScored}</span>&nbsp;GS</div>
        <div className="flex content-center items-center font-light"><span className="font-bold">{props.teamGoalsConceded}</span>&nbsp;GC</div>
        <div className="flex content-center items-center font-light"><span className="font-bold">{props.teamWins}</span>&nbsp;W</div>
        <div className="flex content-center items-center font-light"><span className="font-bold">{props.teamDraws}</span>&nbsp;D</div>
        <div className="flex content-center items-center font-light" ><span className="font-bold">{props.teamLoses}</span>&nbsp;L</div>
      </div>
    </div>
  )
}