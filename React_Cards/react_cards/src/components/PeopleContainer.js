import React, { useEffect, useState } from 'react'
import Card from "./Card"

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://65a13f86600f49256fb14106.mockapi.io/person").then(res => res.json()
            .then((data) => {
                setPeople(data);
            }))
    }, [])

    return (
        <div>
            <h1 className='text-6xl'>People</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {people.map(person => {
                    return <Card name={person.name} title={person.jobTitle} imageUrl={person.avatar} />
                })}
            </div>
        </div>
    )
}