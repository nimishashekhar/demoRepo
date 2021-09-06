import React from 'react';
import { Col, Row } from "reactstrap";
import '../../styles/home.css'
const Home = () => <div className='home'>
  <Row>
    <Col md='2' sm='2' lg='2' sx='2'></Col>
    <Col md='8' sm='8' lg='8' sx='8'>
      <br />
      <h6>INTRODUCTION</h6>
      <p>DataOps is an automated, process-oriented methodology, used by analytic and data teams, to improve the quality and reduce the cycle time of data analytics.” It focuses on cultivating data management practices and processes that improve the speed and accuracy of analytics, including data access, quality control, automation, integration, and, ultimately, model deployment and management.</p>
    </Col>
    <Col md='2' sm='2' lg='2' sx='2'></Col>
  </Row>
  <br />
  <Row>
    <Col md='12' sm='12' lg='12' sx='12'>
      <h6>RESOURCES COVERED</h6>
      <p>Data Factory, SQL Database & Server, Databricks, Data Lake Gen2, Key Vault, Virtual Network</p>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md='12' className='text-center' sm='12' lg='12' sx='12'>
      <h6 className='howItWorks'>HOW IT WORKS?</h6>
    </Col>
  </Row>
  <br />
  <Row>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente' style={{ marginTop: 5 + 'em' }}>
      <h6>Infra Creation</h6>
      <p>Drag and drop functionality for resource creation.<br />
        Connection of resources with the help of node.<br />
        Create and then export template for future references.
    </p>
    </Col>
    <Col md="2 text-center" sm='2 text-center' lg='2text-center' sx='2 text-center'>
      <h6>Step</h6><h6>01</h6>
      <div className='dividerContainer'><div className='homeDivider'></div></div>
    </Col>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente'><img src='assets/img/infra.png'></img></Col>
  </Row>
  <br />
  <br />
  <Row>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente'><img src='assets/img/accessManagement.png'></img></Col>
    <Col md="2 text-center" sm='2 text-center' lg='2text-center' sx='2 text-center'>
      <h6>Step</h6><h6>02</h6>
      <div className='dividerContainer'><div className='homeDivider'></div></div>
    </Col>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente' style={{ marginTop: 5 + 'em' }}>
      <h6>Access Permission</h6>
      <p>Role assignment at Subscription Level.<br />
        Role assignment at Resource Group Level.<br />
        Role Assignment at Resource Level.
</p>
    </Col>
  </Row>
  <br />
  <br />
  <Row>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente' style={{ marginTop: 5 + 'em' }}>
      <h6>Data Factory Pipeline Setup</h6>
      <p>Easy configuration of Connection, Dataset, Pipeline.<br />
        Easy to monitor and trigger Data pipelines.<br />
        Connection secured with the help of key vault.
</p>
    </Col>
    <Col md="2 text-center" sm='2 text-center' lg='2text-center' sx='2 text-center'>
      <h6>Step</h6><h6>03</h6>
      <div className='dividerContainer'><div className='homeDivider'></div></div>
    </Col>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente'><img src='assets/img/dataPipeline.png'></img></Col>
  </Row>
  <br />
  <br />
  <Row>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente'><img src='assets/img/security.png'></img></Col>
    <Col md="2 text-center" sm='2 text-center' lg='2text-center' sx='2 text-center'>
      <h6>Step</h6><h6>04</h6>
      <div className='dividerContainer'><div className='homeDivider'></div></div>
    </Col>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente' style={{ marginTop: 5 + 'em' }}>
      <h6>Security Management</h6>
      <p>Centralized level of security for all resources.<br />
        Secrets, Connection string, Access keys kept in key vault.<br />
        Fully customized security that can be change depend on use.
</p>
    </Col>
  </Row>
  <br />
  <br />
  <Row>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente' style={{ marginTop: 5 + 'em' }}>
      <h6>Backup, Restore and Monitoring Setup</h6>
      <p>Best practices for Backup & Restore to keep data alive.<br />
        High availability of Data by considering Geo replication.<br />
        Centralized monitoring for each resources to track their logs.
</p>
    </Col>
    <Col md="2 text-center" sm='2 text-center' lg='2text-center' sx='2 text-center'>
      <h6>Step</h6><h6>05</h6>
      <div className='dividerContainer'><div className='homeDivider'></div></div>
    </Col>
    <Col md="5 text-center" sm='5 text-center' lg='5 text-cente' sx='5 text-cente'><img src='assets/img/monitoring.png'></img></Col>
  </Row>
</div>

export default Home;