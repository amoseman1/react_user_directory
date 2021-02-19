import React from "react";

export default function Cards({ picture, name, gender, location, email, cell, search }) {
  return (
    //if/else wraps around the div , if search !== empty and name.includes !==search
    <div className="card">
      <img className="card-img-top"
        src={picture}
        alt="picture of user" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{gender}</p>
        <p>{location}</p>
        <p>{email}</p>
        <p>{cell}</p>
      </div>

    </div>
  )
}
//pass search value here and with and if/else state., if name.includes({search}) then render card, and only if 

{/* function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList; */}
