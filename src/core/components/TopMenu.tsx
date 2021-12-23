import React from "react";
import { Menu, Row, Col } from "antd";
import {
  FileUnknownOutlined,
  HomeOutlined,
  TeamOutlined,
  CloudServerOutlined,
  ProfileOutlined,
  WarningOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
  InfoCircleOutlined,
  ShoppingCartOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { links } from "../../content";

const { SubMenu } = Menu;

const TopMenu = ({ location }: RouteComponentProps) => {
  return (
    <div>
      <Row>
        <Col xs={6} sm={6} md={4} lg={6} xl={6}>
          <Link to="/">
            <h2 style={{ color: "white" }}>
              e<span style={{ color: "#e50000" }}>W</span>arz
            </h2>
          </Link>
        </Col>
        <Col xs={12} sm={12} md={18} lg={12} xl={12}>
          <Menu
            style={{ textAlign: "center" }}
            selectedKeys={[location.pathname]}
            mode="horizontal"
            theme={"dark"}
            overflowedIndicator={<DownCircleOutlined />}
          >
            <Menu.Item key="/">
              <Link to="/">
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="/servers">
              <Link to="/servers">
                <CloudServerOutlined />
                Servers
              </Link>
            </Menu.Item>
            <Menu.Item key="/crew">
              <Link to="/crew">
                <TeamOutlined />
                Crew
              </Link>
            </Menu.Item>
            <Menu.Item key="/shop">
              <ShoppingCartOutlined />
              Shop
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <ProfileOutlined />
                  General
                </span>
              }
            >
              <Menu.Item key="/rules">
                <Link to="/rules">Rules</Link>
              </Menu.Item>
              <Menu.Item key="/servers">
                <Link to="/servers">Server List</Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <Link to="/helpdesk">Help Desk</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/bans">
              <Link to="/bans">Bans</Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <InfoCircleOutlined />
                  About
                </span>
              }
            >
              <Menu.Item key="setting:1">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to="/tos">Terms of services</Link>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <Link to="/faq">FAQ</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="setting:2">
              <a href={links.discord} target="_blank" rel="noopener noreferrer">
                <i
                  className="fab fa-discord"
                  style={{
                    color: "#7289da",
                    fontSize: "1.5em",
                    verticalAlign: "middle",
                  }}
                ></i>
              </a>
            </Menu.Item>
            <Menu.Item key="setting:3">
              <a href={links.steam} target="_blank" rel="noopener noreferrer">
                <i
                  className="fab fa-steam"
                  style={{
                    color: "#c7d5e0",
                    fontSize: "1.5em",
                    verticalAlign: "middle",
                  }}
                ></i>
              </a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(TopMenu);
