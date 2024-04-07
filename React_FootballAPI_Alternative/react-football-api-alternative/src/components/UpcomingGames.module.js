export default function UpcomingGames(props) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return (
    <div className="grid grid-cols-12 gap-10 p-5">
      <div className="grid col-span-5 grid-cols-12 gap-2">
        <div className="col-span-8 text-xl flex items-center">{props.team1TeamName}</div>
        <div className="col-span-4 max-w-20 flex items-center"><img className="max-w-20" src={props.team1IconURL} alt="" /></div>
      </div>
      <div className="col-span-2 text-xl flex items-center">{new Date(props.upcomingGameDate).toLocaleDateString(options, { hour: '2-digit', minute: '2-digit' })}</div>
      <div className="grid col-span-5 grid-cols-12 gap-2">
        <div className="col-span-8 text-xl flex items-center">{props.team2TeamName}</div>
        <div className="col-span-4 max-w-20 flex items-center"><img className="max-w-20" src={props.team2IconURL} alt="" /></div>
      </div>
    </div>
  )
}