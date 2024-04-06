export default function RecentGames(props) {
    return (
        <div>
            <div className="">
                <div className="">{props.team1TeamName}</div>
                <div className="max-w-20"><img className="max-w-w-20" src={props.team1IconURL} alt="" /></div>
                <div className="">{props.team1Goals}</div>
            </div>

            <div className="">
                <div className="">{props.team2TeamName}</div>
                <div className="max-w-20"><img className="max-w-20" src={props.team2IconURL} alt="" /></div>
                <div className="">{props.team2Goals}</div>
            </div>
        </div>
    )
}