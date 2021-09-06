import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../NavBar';
import { Redirect, withRouter } from 'react-router-dom';
import '../../styles/nav-bar.css';
//import '../../styles/login.css';

const Layout = ({ children, location }) => <Container fluid>
  {
   /*  user.user.exists ?
      <Row sm={1} md={4}>
        <Col md={12}>
          <NavBar />
        </Col>
        <Col md={12}>
          {children}
        </Col>
      </Row> : location.pathname === '/' ?
      // Login Container will be added here 
      <span></span>
        : <Redirect to='/' /> */
  }
   <Row sm={1} md={4}>
        <Col md={12}>
          <NavBar />
        </Col>
        <Col md={12}>
          {children}
        </Col>
      </Row>
</Container>

export default withRouter(Layout);