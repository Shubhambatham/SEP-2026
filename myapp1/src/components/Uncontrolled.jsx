import React, { useRef, useState } from 'react';

export default function UnControlled() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const [submitted, setSubmitted] = useState(null); // holds submitted values

  const handleData = (e) => {
    e.preventDefault();
    setSubmitted({
      name: nameRef.current.value,
      age: ageRef.current.value
    });
  };

  return (
    <>
      <form onSubmit={handleData}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" ref={ageRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
  sent name and age will be displayed below the form after submission.
      {submitted && (
        <span>
          Name: {submitted.name}<br />
          Age: {submitted.age}
        </span>
      )}
    </>
  );
}