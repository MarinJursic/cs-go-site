import React, { Component, Props } from "react";
import { Layout as LayoutShell } from "antd";
import TopMenuNew from "./TopMenuNew";
import "./TopMenuNew.scss";

const { Header, Content } = LayoutShell;

type LayoutProps = {};

class LayoutNew extends Component<LayoutProps & Props<Component>> {
  render() {
    const { children } = this.props;
    return (
      <div className="layoutNew">
        <TopMenuNew />
        <div className="backgroundBlue"></div>
        <Content>{children}</Content>
      </div>
    );
  }
}

export default LayoutNew;
