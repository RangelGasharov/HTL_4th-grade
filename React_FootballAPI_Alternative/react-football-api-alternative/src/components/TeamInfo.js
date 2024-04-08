export default function TeamInfo(props) {
  return (
    <div className="lg:text-lg sm:text-sm grid grid-cols-12 bg-teaminfo-default p-2 relative items-center sm:grid-rows-2">
      <div className="sm:row-span-1">
        <div className="font-bold flex items-center content-center col-span-1"><span>{props.teamPlace}</span></div>
        <div className="flex content-start col-span-2 font-semibold">{props.teamName}</div>
        <div className="flex items-center justify-center content-center col-span-2"><img className="max-w-20 max-h-10 sm:max-w-10 sm:max-h-15" alt={props.teamName + "-Logo"} src={props.teamIconURL} /></div>
        <div className="font-semibold text-lg col-span-2"><span>{props.teamPoints}</span> {props.teamPoints === 1 ? "PT" : "PTS"}</div>
      </div>
      <div className="grid grid-cols-6 gap-14 sm:row-span-1">
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