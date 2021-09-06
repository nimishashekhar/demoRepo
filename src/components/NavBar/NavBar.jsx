import React, { useState, useEffect } from "react";
import { NavItem, NavLink, Alert, Modal, ModalHeader, ModalBody, Button  } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import "../../styles/nav-bar.css";

const MyNavItem = ({ location, pathname, children, ...NavLinkProps }) => (
  <NavItem>
    <NavLink
      {...NavLinkProps}
      active={location.pathname === pathname}
      to={pathname}
    >
      {children}{" "}
    </NavLink>
  </NavItem>
);

const NavBar = ({location}) => {
  const doLogout = () => {
   /*  logout();
 */  };

  /* const [modal, setModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleNotification = () => setNotificationModal(!notificationModal); */

  var options = [];

  
  return (
    <nav horizontal="true" className="navbar topNav navbar-expand-xl">
      <div className="">
        <div className="collapse navbar-collapse">
          <div className="navbar-nav dataops-nav-bar">
            <MyNavItem
              className="nav-item nav-link"
              pathname="/"
              location={location}
              tag={Link}
            >
              HOME
            </MyNavItem>
         
            <MyNavItem
              className="nav-item nav-link"
              pathname="/infrastructure"
             location={location}
              tag={Link}
            >
              INFRASTRUCTURE
            </MyNavItem>
            

            <NavItem className="nav-item nav-notification">
              <NavLink>

                <span
                  data-toggle="modal"
                  data-target="#notificationModal"
                  data-backdrop="false"
                  style={{ position: 'relative' }}
                >
                  <i class="fa fa-bell" aria-hidden="true"></i>
                </span>

                <div
                  className="modal fade notification-modal"
                  id="notificationModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="notificationModalLabel"
                  aria-hidden="true"
                >
                  
                </div>


              </NavLink>
            </NavItem>

            
            <NavItem className="nav-item nav-logout">
              <NavLink
                data-toggle="modal"
                data-target="#exampleModal"
                data-backdrop="false"
                style={{ position: 'relative' }}
              >
                LOGOUT
                <div
                  className="modal fade user-info-modal"
                  id="exampleModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content user-info-content">
                      <div className="modal-body user-info-body">
                        {/* <i className="material-icons">account_circle</i> */}

                        <p>
                          <i className="fa fa-user account"></i>{" "}
                          Account Name
                        </p>
                        <p title={"UserName"} className='userEmail'>
                          <i
                            className="fa fa-envelope email"
                            aria-hidden="true"
                          ></i>{" "}
                          {"UserName"}
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary user-info-signout-btn btn-sm"
                          //onClick={doLogout}
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
