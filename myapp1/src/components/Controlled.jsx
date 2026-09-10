import react, { useState, useRef } from 'react'

export default function Controlled() {
    const [name, setName] = useState('Ajay');
    const [age, setAge] = useState(25);
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    
}