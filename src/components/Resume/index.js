import React from 'react';


function Resume() {

  return (
    <section className="my-5" >
      <h1 id="about" className="my-2">My Experience</h1>
      <h2>Download my <a src= "">Resume</a></h2>
      <div className="my-5">
        <h3>Coding Languages</h3>
        <ul>
            <li>Java</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
      </div>
      <div className="my-5">
      <h3>Front-End Proficiencies</h3>
        <ul>
            <li className="flex">1</li>
            <li className="flex">1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
      </div>
      <div className="my-5">
      <h3>Back-End Proficiencies</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
      </div>
    </section>
  )
}

export default Resume;