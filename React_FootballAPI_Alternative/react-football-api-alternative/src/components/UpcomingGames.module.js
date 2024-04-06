export default function UpcomingGames(props) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return (
    <div className="">
      <div className="">{props.team1TeamName}</div>
      <div className="max-w-10"><img className="max-w-10" src={props.team1IconURL} alt="" /></div>
      <div className="">{new Date(props.upcomingGameDate).toLocaleDateString(options, { hour: '2-digit', minute: '2-digit' })}</div>
      <div className="">{props.team2TeamName}</div>
      <div className="max-w-10"><img className="max-w-10" src={props.team2IconURL} alt="" /></div>
    </div>
  )
}