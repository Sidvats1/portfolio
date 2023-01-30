import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a final-year B.tech computer science student at India's Inderprastha Engineering College. I'm a front-end developer with experience working on the web.Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, JAVASCRIPT, and SQL. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
        </p>

        <br />

        <p className="text-xl">
          I'm a voracious reader who particularly enjoys reading about philosophy and psychology. I also work as a part-time coach and play chess.
        </p>
      </div>
    </div>
  );
};

export default About;
