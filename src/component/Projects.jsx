import React from 'react';


export default function Projects({ name, header, url, img, text }) {
    console.log(name, header, url, img, text);
  
    return (
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{text}</p>
          <a href={url} className="btn btn-primary">Go to project</a>
        </div>
      </div>
    );
  }
  
