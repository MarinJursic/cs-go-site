import React, { Component, Props } from "react";
import { Layout as LayoutShell } from "antd";
import TopMenu from "./TopMenu";

const { Header, Content } = LayoutShell;

type LayoutProps = {};

class Layout extends Component<LayoutProps & Props<Component>> {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header>
          <TopMenu />
        </Header>
        <Content>{children}</Content>
      </div>
    );
  }
}

export default Layout;
