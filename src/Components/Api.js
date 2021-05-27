import React from "react";
import "./Api.css";
import "../App.css";

export default class FetcRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const tokens = "123456789";
    const urls = "https://desafio.eadplataforma.com/api/1/users";
    const response = await fetch(urls + "?token=" + tokens);
    const data = await response.json();
    this.setState({ person: data.users, loading: false });
    console.log(data.users[0]);
  }
  renderRow(row) {
    return (
      <div className="dev">
        {" "}
       <p> <img className="images" src={row.photo_url} /></p>   <p>{row.name}</p>   <p> {row.email}</p>
       <p>{row.phone}</p> <p>{" R$ " + row.amount} </p>  
      </div>
    );
  }

  render() {
    return (
      <div className="api">
        {this.state.loading || !this.state.person ? (
          <div></div>
        ) : (
          <div className="dev1">
            <div>{this.state.person.map(this.renderRow)}</div>
          </div>
        )}
      </div>
    );
  }
}
