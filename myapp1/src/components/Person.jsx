import React, { useState } from 'react'
import User from './User'
export default function Person() {
    const [personName, setPersonName] = useState('Ajay')
    const [age, setAge] = useState(25)
    return (
        <div>
            <div>
                Person Name: <input type="text" value={personName} onChange={(e) => setPersonName(e.target.value)} />
                <br />
                Person Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <p>My name is {personName}</p>
            <p>I am {age} years old.</p>
            <p>Calling user component  </p>
            <br />
            <User name={personName} age={age} />
        </div>
    )
}