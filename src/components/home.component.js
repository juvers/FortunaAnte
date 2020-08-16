import React, { Component } from "react";

import UserService from "../services/user.service";
import PublicUser from "./public.user.component";
import {Slides} from "../services/slides";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container-fluid">
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3>    
        </header> */}
          <PublicUser slides={Slides}></PublicUser>   
      </div>
    );
  }
}