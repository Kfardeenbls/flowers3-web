import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <nav
        // id="sidebarMenu"
        className={classes.sidebarMenu}
        // style={{
        //   width: "300px",
        // }}
      >
        <div className="position-relative">
          <div className="list-group list-group-flush mx-3 mt-1">
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Main dashboard</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple active"
            >
              <i className="fas fa-chart-area fa-fw me-3"></i>
              <span>Webiste traffic</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <span>Password</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-line fa-fw me-3"></i>
              <span>Analytics</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-pie fa-fw me-3"></i>
              <span>SEO</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-bar fa-fw me-3"></i>
              <span>Orders</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-globe fa-fw me-3"></i>
              <span>International</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-building fa-fw me-3"></i>
              <span>Partners</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-calendar fa-fw me-3"></i>
              <span>Calendar</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-users fa-fw me-3"></i>
              <span>Users</span>
            </a>
            <a
              href="./"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-money-bill fa-fw me-3"></i>
              <span>Sales</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
