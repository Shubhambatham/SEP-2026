import react, { useState } from 'react'
export default function User(props) {
    const [name, setName] = useState('Obi');
    const [age, setAge] = useState(30);
    return (
        <div>
            {props.name} is {props.age} years old.<br/>
        </div>
        
    )
}