import React from "react";

export default function Cards({ picture, firstName, lastName, email, cell, location }) {


  return (

    <>
      <tbody >
        <tr >
          <td><img src={picture} alt="Employee Picture" /></td>
          <td>{firstName} {lastName}</td>
          <td>{email}</td>
          <td>{cell}</td>
          <td>{location}</td>
        </tr>
      </tbody>
    </>
  )
}

