import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with programming and have continuously strived to learn and grow in this ever-evolving field... 🤷‍♂️
              <br />
              <br />I have gained proficiency in classics like 
              <i>
                <b className="purple"> Java, Angular and SpringBoot. </b>
              </i>
              <br />
              <br />
              My areas of interest include building innovative  &nbsp;
              <i>
                <b className="purple">web technologies and products, </b> and
                as well as exploring{" "}
                <b className="purple">
                  Cloud Computing & AWS.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into developing products using <b className="purple">Java, Angular and SpringBoot</b>  and leveraging the capabilities of
              <i>
                <b className="purple">
                  {" "}
                  cloud computing with AWS. </b>
              </i>
              &nbsp;I also have experience with modern JavaScript libraries and frameworks like,
                <b className="purple"> React.js and Next.js </b>
                applying them to create robust and dynamic applications.
              <i>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chyabhishekavi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/chy_avi_?t=xXrW0XhEIspRjeYpdzewtA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishekchoudha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chy_avi_?igsh=MXgwbmZnYnQ3eDI4Zw=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
