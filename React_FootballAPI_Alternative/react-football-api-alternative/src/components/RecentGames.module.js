export default function RecentGames(props) {
    return (
        <div className="grid grid-cols-2 gap-10 p-5">
            <div className="grid col-span-1 grid-cols-12 gap-2">
                <div className="col-span-5 text-xl flex items-center">{props.team1TeamName}</div>
                <div className="col-span-4 max-w-20 flex items-center"><img className="max-w-20" src={props.team1IconURL} alt="" /></div>
                <div className="col-span-3 flex items-center">{props.team1Goals}</div>
            </div>
            <div className="grid col-span-1 grid-cols-12 gap-2">
                <div className="col-span-5 text-xl flex items-center">{props.team2TeamName}</div>
                <div className="col-span-4 max-w-20 flex items-center"><img className="max-w-20" src={props.team2IconURL} alt="" /></div>
                <div className="col-span-3 flex items-center">{props.team2Goals}</div>
            </div>
        </div>
    )
}