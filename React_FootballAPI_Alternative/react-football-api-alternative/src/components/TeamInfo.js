export default function TeamInfo(props) {
  return (
    <div className="lg:text-lg sm:text-sm grid grid-cols-12 bg-teaminfo-default p-2 relative items-center">
      <div className="grid col-span-8 grid-cols-8">
        <div className="flex col-span-1 font-bold items-center content-center"><span>{props.teamPlace}</span></div>
        <div className="flex col-span-3 items-center content-center font-semibold">{props.teamName}</div>
        <div className="flex col-span-2 items-center content-center"><img className="max-w-20" alt={props.teamName + "-Logo"} src={props.teamIconURL} /></div>
        <div className="flex col-span-2 items-center content-center font-semibold text-lg"><span>{props.teamPoints}</span>&nbsp;{props.teamPoints === 1 ? "PT" : "PTS"}</div>
      </div>
      <div className="grid col-span-4 grid-cols-6 gap-14">
        <div className="flex col-span-1 content-center items-center font-light"><span className="font-bold">{props.teamGamesPlayed}</span>&nbsp;Pld</div>
        <div className="flex col-span-1 content-center items-center font-light"><span className="font-bold">{props.teamGoalsScored}</span>&nbsp;GS</div>
        <div className="flex col-span-1 content-center items-center font-light"><span className="font-bold">{props.teamGoalsConceded}</span>&nbsp;GC</div>
        <div className="flex col-span-1 content-center items-center font-light"><span className="font-bold">{props.teamWins}</span>&nbsp;W</div>
        <div className="flex col-span-1 content-center items-center font-light"><span className="font-bold">{props.teamDraws}</span>&nbsp;D</div>
        <div className="flex col-span-1 content-center items-center font-light"><span className="font-bold">{props.teamLoses}</span>&nbsp;L</div>
      </div>
    </div>
  )
}