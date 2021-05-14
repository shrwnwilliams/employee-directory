import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table"
import Search from "./Search"

export default class Body extends Component {
  state = {
    users: [{}],
    filteredUsers: [{}],
  };

  filterResults = (e) => {
    // console.log(e.target.value);
    const input = e.target.value;
    const filteredList = this.state.users.filter((user) => {
        let values = Object.values(user).join("").toLowerCase()
        return values.indexOf(input.toLowerCase()) !== -1;
    })
    this.setState({
        filteredUsers: filteredList
    })
  }

  componentDidMount() {
    API.getUsers().then((res) => {
        this.setState({
            users: res.data.results,
            filteredUsers: res.data.results
        })
    //   console.log(this.state);
    });
  }

  render() {
    return (
      <div className="container">
        <Search filterResults = {this.filterResults}/>
        <Table users={this.state.filteredUsers} />
      </div>
    );
  }
}
