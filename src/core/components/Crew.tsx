import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import { links } from "../../content";
import Layout from "./Layout";
import LayoutNew from "./LayoutNew";

const { Meta } = Card;

class Crew extends Component {
  render() {
    return (
      <LayoutNew>
        <div>
          <div className="jumbotron">
            <h2>
              e<span style={{ color: "#e50000" }}>W</span>arz crew
            </h2>
          </div>
          <div className="container">
            <Row justify="center">
              <Col style={{ padding: "15px" }}>
                <Card
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="shadow profile"
                      src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7c/7cf3b723a723165fa63944f4330b6ba84a8d8d3d_full.jpg"
                    />
                  }
                >
                  <Meta
                    className="crew-card-meta"
                    title={
                      <div>
                        <p style={{ margin: 0, fontWeight: "bold" }}>Shadow</p>
                        <span>-</span>
                        <p>Owner</p>
                      </div>
                    }
                    description={
                      <a
                        href={links.steamShadowProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fab fa-steam"
                          style={{ fontSize: "1.7em" }}
                        ></i>
                      </a>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </LayoutNew>
    );
  }
}

export default Crew;
