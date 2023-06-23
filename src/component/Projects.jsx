import React from 'react';


export default function Projects({ name, header, url, img, text }) {
    console.log(name, header, url, img, text);
  
    return (
        <div className="card">
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
  
