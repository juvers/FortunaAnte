import React, { Component } from "react";

import UserService from "../services/user.service";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
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
                    jelly-o brownie sweet
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    Muffin jelly gingerbread
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    sesame snaps chocolate
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    Oat cake
                </div>
            </div>
            <div className="item item--full">
                <div className="item__details">
                    jujubes cheesecake
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    Dragée pudding brownie
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    Oat cake
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    powder toffee
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    pudding cheesecake
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    toffee bear claw
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    cake cookie croissant
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    liquorice sweet roll
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    chocolate marzipan
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    danish dessert lollipop
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    sugar plum dragée
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    powder toffee
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    pudding cheesecake
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    toffee bear claw
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    cake cookie croissant
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    liquorice sweet roll
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    chocolate marzipan
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    danish dessert lollipop
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    sugar plum dragée
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    danish dessert lollipop
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    sugar plum dragée
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    powder toffee
                </div>
            </div>
            <div className="item item--medium">
                <div className="item__details">
                    pudding cheesecake
                </div>
            </div>
            <div className="item item--large">
                <div className="item__details">
                    toffee bear claw
                </div>
            </div>
            <div className="item">
                <div className="item__details">
                    cake cookie croissant
                </div>
            </div>
        </div>
      </div>
    );
  }
}