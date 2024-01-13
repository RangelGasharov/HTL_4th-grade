import React, { useEffect, useState } from 'react'
import Card from "./Card"

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);

    useEffect(() => {
        fetch("https://65a13f86600f49256fb14106.mockapi.io/person").then(res => res.json()
            .then((data) => {
                setPeople(data);
                setFilteredPeople(data);
            }))
    }, []);

    const filterPeople = (filter) => {
        let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
        setFilteredPeople(filtered);
    }

    return (
        <div>
            <h1 className='text-6xl'>People</h1>
            <div>
                <input className='border p-3' type='text' placeholder='Search' onChange={(element) => {
                    filterPeople(element.target.value);
                }}></input>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {filteredPeople.map(person => {
                    return <Card name={person.name} title={person.jobTitle} imageUrl={person.avatar} />
                })}
            </div>
        </div>
    )
}