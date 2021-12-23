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

const TopMenuNew = ({ location }: RouteComponentProps) => {
  return (
    <div className="menuNew">
      <Link to="/">
        <h1 style={{ color: "white", fontSize: "42px" }}>
          e<span style={{ color: "#e50000" }}>W</span>arz
        </h1>
      </Link>
      <div className="links">
        <div className="dropdownMenu">
          <i
            className="fas fa-bars"
            style={{ color: "white", fontSize: "24px" }}
          ></i>
          <div className="dropdownList">
            <Link to="/">
              <h2 className="link">Home</h2>
            </Link>
            <Link to="/servers">
              <h2 className="link">Servers</h2>
            </Link>
            <Link to="/crew">
              <h2 className="link">Crew</h2>
            </Link>
            <Link to="/shop">
              <h2 className="link">Shop</h2>
            </Link>
            <Link to="/rules">
              <h2 className="link">Rules</h2>
            </Link>
            <Link to="/servers">
              <h2 className="link">Server list</h2>
            </Link>
            <Link to="/bans">
              <h2 className="link">Bans</h2>
            </Link>
            <Link to="/helpdesk">
              <h2 className="link">Help desk</h2>
            </Link>
            <Link to="/faq">
              <h2 className="linkMenu">FAQ</h2>
            </Link>
            <Link to="/tos">
              <h2 className="linkMenu">TOS</h2>
            </Link>
            <Link to="/privacy-policy">
              <h2 className="linkMenu">Privacy Policy</h2>
            </Link>
            <a href={links.discord} target="_blank" rel="noopener noreferrer">
              <i
                className="fab fa-discord"
                style={{
                  color: "#7289da",
                  fontSize: "2.5em",
                  verticalAlign: "middle",
                }}
              ></i>
            </a>
            <a href={links.steam} target="_blank" rel="noopener noreferrer">
              <i
                className="fab fa-steam"
                style={{
                  color: "#c7d5e0",
                  fontSize: "2.5em",
                  verticalAlign: "middle",
                }}
              ></i>
            </a>
          </div>
        </div>
        <div className="desktop">
          <Link to="/">
            <h2 className="link">Home</h2>
          </Link>
          <Link to="/servers">
            <h2 className="link">Servers</h2>
          </Link>
          <Link to="/crew">
            <h2 className="link">Crew</h2>
          </Link>
          <Link to="/shop">
            <h2 className="link">Shop</h2>
          </Link>
          <div className="dropdown">
            <h2 className="link">General</h2>
            <div className="dropdownList">
              <Link to="/rules">
                <h2 className="link">Rules</h2>
              </Link>
              <Link to="/servers">
                <h2 className="link">Server list</h2>
              </Link>
              <Link to="/helpdesk">
                <h2 className="link">Help desk</h2>
              </Link>
            </div>
          </div>
          <Link to="/bans">
            <h2 className="link">Bans</h2>
          </Link>
          <div className="dropdown">
            <h2 className="link">About</h2>
            <div className="dropdownList">
              <Link to="/faq">
                <h2 className="link">FAQ</h2>
              </Link>
              <Link to="/tos">
                <h2 className="link">TOS</h2>
              </Link>
              <Link to="/privacy-policy">
                <h2 className="link">Privacy Policy</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <a href={links.discord} target="_blank" rel="noopener noreferrer">
          <i
            className="fab fa-discord"
            style={{
              color: "#7289da",
              fontSize: "2.5em",
              verticalAlign: "middle",
            }}
          ></i>
        </a>
        <a href={links.steam} target="_blank" rel="noopener noreferrer">
          <i
            className="fab fa-steam"
            style={{
              color: "#c7d5e0",
              fontSize: "2.5em",
              verticalAlign: "middle",
            }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default withRouter(TopMenuNew);
