import React, { Component } from "react";
import Cards from "./Cards";
import API from "../utils/API";

class UserContainer extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.grabUsers();
    };

    grabUsers = () => {
        API.get20users()
            .then(res => { this.setState({ results: res.data.results }) })
            .catch(err => console.log(err))
    };

    //dont need a form so no hanldeinoutchange/handleformsubmit?
    render() {
        return (
            <div>
                <Cards></Cards>
            </div>
        )
    }



}

export default UserContainer;