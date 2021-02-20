import React, { Component } from "react";
import Cards from "./Cards";
import API from "../utils/API";
import SearchBox from "./Searchbox";


class UserContainer extends Component {
    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        this.grabUsers();
    };

    grabUsers = () => {
        API.get50users()
            .then(res => this.setState({ results: [...res.data.results] }))
            .catch(err => console.log(err))
    };

    sortFunc = () => {
        const sortName = [...this.state.results].sort((a, b) =>
            a.name.first > b.name.first ? 1 : -1
        );
        this.setState({ ...this.state, results: sortName })
    }


    render() {
        return (
            <div>
                <h1>User Directory</h1>
                <SearchBox
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />
                <p>Type an employee's name to <strong>Search</strong> above or click on <strong>Name</strong> below to sort alphabetically by Firstname</p>
                <table id="table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th onClick={() => this.sortFunc(this.state.search)}>Name</th>
                            <th>Email</th>
                            <th>Cell</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    {this.state.results && this.state.results.map(user =>
                    (this.state.search && user.name.first.toLowerCase().includes(this.state.search.toLowerCase()) ?
                        <Cards
                            key={user.login.uuid}
                            empFilter={this.filterEmps}
                            picture={user.picture.thumbnail}
                            firstName={user.name.first}
                            lastName={user.name.last}
                            email={user.email}
                            cell={user.cell}
                            location={user.location.country}
                        />
                        : !this.state.search ?
                            <Cards
                                key={user.login.uuid}
                                empFilter={this.filterEmps}
                                picture={user.picture.thumbnail}
                                firstName={user.name.first}
                                lastName={user.name.last}
                                email={user.email}
                                cell={user.cell}
                                location={user.location.country}
                            /> : null
                    )
                    )}
                </table>

            </div>
        )
    }
}





export default UserContainer;