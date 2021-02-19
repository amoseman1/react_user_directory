import React, { Component } from "react";
import Cards from "./Cards";
import API from "../utils/API";

class UserContainer extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        this.grabUsers();
    };

    grabUsers = () => {
        API.get20users()
            // .then(res => console.log(res))
            .then(res => this.setState({ results: [...res.data.results] }))
            .catch(err => console.log(err))
    };

    //need an onchange for the search comp
    render() {
        return (
            <div>
                {this.state.results && this.state.results.map(user => (<Cards
                    picture={user.picture.medium}
                    name={user.name.first}
                    gender={user.gender}
                    location={user.location.city}
                    email={user.email}
                    cell={user.cell}
                />)
                )}

            </div>
        )
    }



}

export default UserContainer;