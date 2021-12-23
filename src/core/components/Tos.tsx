import React, { Component } from "react";
import { Divider } from "antd";
import { tos } from "../../content";
import Layout from "./Layout";
import LayoutNew from "./LayoutNew";

class Tos extends Component {
  render() {
    return (
      <LayoutNew>
        <div className="tos-wrapper">
          <div className="jumbotron">
            <h2>Terms of services</h2>
          </div>
          <div className="container tos-container">
            {tos.map((item, key) => (
              <div key={key}>
                <p
                  style={
                    item.colorRed
                      ? { fontWeight: "bold", color: "#e50000" }
                      : {}
                  }
                >
                  {item.text}
                </p>
                <Divider />
              </div>
            ))}
          </div>
        </div>
      </LayoutNew>
    );
  }
}

export default Tos;
