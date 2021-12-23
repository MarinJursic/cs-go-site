import React, { Component } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Router from "./Router";

// <Layout></Layout>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
        <div className="footer">
          <h4>Copyright © 2021. All Rights Reserved By eWarz</h4>
        </div>
      </div>
    );
  }
}

export default App;
