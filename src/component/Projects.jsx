import React from 'react';
//import ya from '/images/background-img/backgroundProjects/b-1.gif'


export default function Projects({background, name, header, url, img, text }) {
    console.log( background,name, header, url, img, text);
    const cardStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      color: "white",
      margin: "10px"
      
    };
  
    return (
      <div className="card project-card" style={cardStyle}>
         <div className="project-background" style={{ backgroundImage: `url(${background})` }}></div>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={img} className="card-img" alt={name} />
            <div className='neon-line'></div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name} <br /> {header}</h5>
              <p className="card-text">{text}</p>
              <a href={url} className="btn btn-primary">Go to project</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
