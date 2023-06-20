import React from 'react';
import '../styles/home.css';
import htmlLogo from '../assets/images/home-img/html-5.gif'
import reactLogo from '../assets/images/home-img/react.gif'
import angularLogo from '../assets/images/home-img/angular.png'
import nodejsLogo from '../assets/images/home-img/nodejs.png'
import cssLogo from '../assets/images/home-img/css.png'
import mongoLogo from '../assets/images/home-img/mongodb.png'
import sqlLogo from '../assets/images/home-img/sql.png'
import pythonLogo from '../assets/images/home-img/python.png'
import csharpLogo from '../assets/images/home-img/csharp.png'
import bootstrapLogo from '../assets/images/home-img/bootstrap.png'



export default function Home() {
  return (
    <>
    <div className='home-body'>
      <div className='home-container'>
        <div className='neon-line'></div>
          <div className='home-header'>
        Hello World <br /> Avner Goldberg
          </div>
          <div className='home-text'>
       a student web developer specializing in full-stack. I have a passion for creating visually captivating and user-friendly websites and web applications. By combining design principles, responsive techniques, and thoughtful animations, I strive to deliver seamless and engaging experiences. With a focus on simplicity, consistency, and user feedback, I aim to contribute to the success of every project I work on. Let's create something amazing together!
          </div>

        <div className='neon-line'></div>

        <div className='introduction'>
          <div className='introduction-header'>
            <p>Passionate Full Stack Web Developer | Building Exceptional Web Experiences</p>
          </div>
          <div className='introduction-text'>
            <p>
              I am a Full Stack Web Developer student specializing in building comprehensive websites and web applications. With a passion for both front-end and back-end development, I strive to create exceptional digital experiences that drive the success of the overall product. <br />
              You can explore some of my impressive projects in the dedicated Projects section, showcasing my skills and expertise. Additionally, I enjoy sharing valuable insights and knowledge that I have acquired throughout my journey in web development. You can find my GitHub repository where I regularly contribute and provide helpful content to the developer community. <br />
              Stay connected with me on LinkedIn to access a wealth of valuable content related to web development and programming. I frequently share insightful articles, tutorials, and industry updates to keep you informed and inspired. <br />
              I am actively seeking job opportunities that align with my skills and experiences. If you have an exciting opportunity that could benefit from my expertise, please feel free to reach out to me. I am eager to contribute, learn, and grow in a collaborative environment. <br />
              Thank you for your time, and I look forward to connecting with you.
            </p>
          </div>
        </div>

        <div className='neon-line'></div>

          <div className='skills-header'>skills</div>
        <div className='skills d-flex flex-wrap'>
          <img className='html-logo' src={htmlLogo} alt="HTML Logo" />
          <img className='css-logo' src={cssLogo} alt="css Logo" />
          <img className='react-logo' src={reactLogo} alt="react Logo" />
          <img className='angular-logo' src={angularLogo} alt="angular Logo" />
          <img className='nodejs-logo' src={nodejsLogo} alt="nodejs Logo" />
          <img className='mongo-logo' src={mongoLogo} alt="mongo Logo" />
          <img className='sql-logo' src={sqlLogo} alt="sql Logo" />
          <img className='python-logo' src={pythonLogo} alt="python Logo" />
          <img className='csharp-logo' src={csharpLogo} alt="csharp Logo" />
          <img className='bootstrap-logo' src={bootstrapLogo} alt="bootstrap Logo" />
        </div>

        <div className='neon-line'></div>

     </div>
    </div>
   
    </>
  )
}
