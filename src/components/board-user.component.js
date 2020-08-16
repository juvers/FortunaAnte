import React, { Component } from "react";

import UserService from "../services/user.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
        <div className="grid">
            <div className="item">
                <div className="item__details">
                    Modern Architecture
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    Ranch-style House
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Victorian Architecture
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    American Craftsman
                </div>
            </div>
            <div className="item user-item  item--full">
                <div className="item__details">
                    Colonial Architecture
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Greek Revival Architecture
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    Gothic Revival Architecture
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Mansion
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Italianate Architecture
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    Mid Century Architecture
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Vernacular Architecture
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Prairie School
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Tudor Architecture
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    Georgian Architecture
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    American Colonial
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Federal Architecture
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Colonial Revival Architecture
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    Mediterranean Revival Architecture
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Pueblo Revival Architecture
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Stick Style
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Saltbox House
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    Elizabethan Architecture
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Regency Architecture
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    American Foursquare
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Gablefront House
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Antebellum Architecture
                </div>
            </div>
            <div className="item user-item  item--medium">
                <div className="item__details">
                    Spanish Colonial
                </div>
            </div>
            <div className="item user-item  item--large">
                <div className="item__details">
                    French Colonial
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    Neo-eclectic Architecture
                </div>
            </div>
        </div>

      </div>
    );
  }
}