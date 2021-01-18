import React from 'react';
import coverImage from "../../assets/cover/Cover.jpg";

function About() {

  return (
    <section className="my-5" >

      <div className="my-5">
        <h1 id="about" className="my-2">Who am I?</h1>
      </div>
      <div className="my-2">
        <p>
          My name is Alexandra and I am striving to learn how to develop web applications!
      </p>
      </div>

      <div className="img">
        <img src={coverImage} className="img" style={{ width: "20%" }} alt="cover" />
      </div>

    </section>
  )
}

export default About;