import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              my name is mahdi rezaei I'm a self-taught front-end developer.
            </p>
          </div>
          <div>
            <p>
              I'm 25 and love learning and solving problems.I primarily focus on
              writing clean, elegant, and efficient code. I have mastered Html,
              Css, Js and React and currently trying to perfect my knowledge for
              Next Js. I have been working as front-end developer for more 1
              year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
