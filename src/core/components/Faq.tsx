import React, { Component } from "react";
import { Collapse } from "antd";
import { Typography } from "antd";
import { faq } from "../../content";
import Layout from "./Layout";
import LayoutNew from "./LayoutNew";

const { Text } = Typography;
const { Panel } = Collapse;

class Faq extends Component {
  render() {
    return (
      <LayoutNew>
        <div className="faq-wrapper">
          <div className="jumbotron">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="container">
            <Collapse defaultActiveKey={["0"]}>
              {faq.map((item, key) => (
                <Panel header={item.question} key={key}>
                  <Text code>{item.answer}</Text>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </LayoutNew>
    );
  }
}

export default Faq;
