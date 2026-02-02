import React from 'react';

export default function Contentcomponent() {
  const biodata = {
    name: "Dhruvi Patel",
    age: 22,
    course: "MCA",
    college: "LDRP",
    city: "Gandhinagar",
    hobbies: "Coding, Music, Reading"
  };

  return (
    <div style={{backgroundColor:"brown",height:400,width:"100%"}}>
      
      <div className="biodata">
        <h1>My Biodata</h1>
        <p><b>Name:</b> {biodata.name}</p>
        <p><b>Age:</b> {biodata.age}</p>
        <p><b>Course:</b> {biodata.course}</p>
        <p><b>College:</b> {biodata.college}</p>
        <p><b>City:</b> {biodata.city}</p>
        <p><b>Hobbies:</b> {biodata.hobbies}</p>
      </div>
    </div>
  );
}
