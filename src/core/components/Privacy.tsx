import React, { Component } from "react";
import { Typography, Divider } from "antd";
import { privacy, privacyListItem, privacyCookies } from "../../content";
import Layout from "./Layout";
import LayoutNew from "./LayoutNew";

const { Title, Text } = Typography;

class Privacy extends Component {
  render() {
    return (
      <LayoutNew>
        <div>
          <div className="jumbotron">
            <h2>Privacy Policy</h2>
          </div>
          <div className="container">
            <div className="privacy-title" style={{ textAlign: "center" }}>
              <Title
                style={{ color: "rgb(114, 137, 218)", fontWeight: "bold" }}
                level={2}
              >
                Generelle vilkår og handelsbetingelser
              </Title>
              <Title style={{ color: "white" }} level={3}>
                {" "}
                Disse vilkår og handelsbetingelser accepteres ved brug af
                eWarz.dk's hjemmeside, og/eller servere.
              </Title>
              <Divider />
            </div>
            <div className="privacy-items">
              {privacy.map((item, key) => (
                <div className="privacy-item" key={key}>
                  <Title style={{ color: "rgb(114, 137, 218)" }} level={4}>
                    {item.title}
                  </Title>
                  <Text style={{ color: "white" }}>{item.text}</Text>
                </div>
              ))}
              <Title
                style={{ color: "rgb(114, 137, 218)", padding: "5px" }}
                level={4}
              >
                {privacyListItem.title}
              </Title>
              <Text style={{ color: "white", padding: "5px" }}>
                {privacyListItem.subTitle}
              </Text>
              <br />
              <br />
              <Text style={{ color: "white", padding: "5px" }}>
                {privacyListItem.listTitle}
              </Text>
              <br />
              {privacyListItem.list.map((item, key) => (
                <div className="privacy-item" key={key}>
                  <Text style={{ color: "white" }}>{item}</Text>
                </div>
              ))}
              <div className="privacy-item">
                <Title style={{ color: "rgb(114, 137, 218)" }} level={4}>
                  {privacyCookies.title}
                </Title>
                <Text style={{ color: "white" }}>{privacyCookies.text}</Text>
                <br />
                <br />
                <Text style={{ color: "white" }}>{privacyCookies.subText}</Text>
                <br />
                <Text style={{ color: "white" }}>
                  {privacyCookies.subText2}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </LayoutNew>
    );
  }
}

export default Privacy;
