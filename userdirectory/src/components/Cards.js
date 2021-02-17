import React from "react";

export default function Cards({ picture, name, gender, location, email, cell }) {
  return (

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
