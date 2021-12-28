import React, { Component, SyntheticEvent } from "react";
import { Button, Card } from "antd";
import { Spin } from "antd";
import { links } from "../../content";
import Layout from "./Layout";
import LayoutNew from "./LayoutNew";

enum ImgLoadingState {
  FINISHED = "Finished",
  LOADING = "Loading",
  ERROR = "Error",
}
type ServerState = { [x: string]: ImgLoadingState };

class Rules extends Component<{}, ServerState> {
  state: ServerState = {
    serverImg1: ImgLoadingState.LOADING,
  };

  handleImageLoaded = (e: SyntheticEvent<HTMLImageElement>) => {
    this.setState({
      [e.currentTarget.id]: ImgLoadingState.FINISHED,
    });
  };

  render() {
    return (
      <LayoutNew>
        <div className="server-wrapper">
          <div className="jumbotron">
            <h2>
              e<span style={{ color: "#e50000" }}>W</span>arz rules
            </h2>
          </div>
          <div className="container">
            <Card
              className="server-card"
              title="[DK] eWarz.dk - Hoejhus9 Bhop [!WS|!RS|FastDL]"
              extra={
                <a href={links.server1}>
                  <Button type="primary">Join</Button>
                </a>
              }
              style={{ width: 560, maxWidth: "100%", padding: 0 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {this.state.serverImg1 === ImgLoadingState.LOADING ? (
                  <Spin />
                ) : null}
                <a
                  href="https://www.gametracker.com/server_info/81.27.215.212:27375/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="serverImg1"
                    onLoad={this.handleImageLoaded}
                    src="https://cache.gametracker.com/server_info/81.27.215.212:27375/b_560_95_1.png"
                    width="100%"
                    height="95"
                    alt=""
                  />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </LayoutNew>
    );
  }
}

export default Rules;
