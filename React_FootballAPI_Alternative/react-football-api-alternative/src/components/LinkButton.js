import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton(props) {
    return (
        <div className="bg-amber-400 font-bold text-lg">
            <Link to={props.path}>{props.text}</Link>
        </div>
    )
}

export default LinkButton