import React, { Component } from "react";
import { home } from "../../content";
import LayoutNew from "./LayoutNew";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <LayoutNew>
        <div className="home-wrapper">
          <div className="home-content">
            <div className="homeTextAndButton">
              <h1>
                Welcome
                <br />
                to the one and only
                <br />
                CS:GO Server!
              </h1>
              <Link to="/servers">
                <h2 className="link">Let's start</h2>
              </Link>
            </div>

            <img src="/img/csgo-background-1.jpg" alt=""></img>
          </div>
        </div>
      </LayoutNew>
    );
  }
}

export default Home;
