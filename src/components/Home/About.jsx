import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Vinay Yarakalapudi </span>
                 and I'm from <span className="yellow"> Suryapet, Telangana, India.</span>
                <br />
                <br />
                Passionate and detail-oriented Computer Science student (B.Tech) with a proven track record of academic excellence (9.79 CGPA, 98.2% XII) and a strong foundation in software development & problem solving. Skilled in building scalable full-stack applications, interactive web solutions, and exploring AI/ML-driven data insights.
                <br />
                <br />
                Known for blending creativity with technical precision, eager to contribute to dynamic teams and develop impactful real-world software solutions. Currently pursuing B.Tech in Computer Science at Chaitanya Bharathi Institute of Technology, Hyderabad with a CGPA of 9.79.
                <br />
                <br />
                Proficient in modern web technologies including React.js, Node.js, Express.js, and MongoDB. Experienced in developing end-to-end MERN applications with CRUD functionality and deploying them on platforms like Render.
                <br />
                <br />
                As a
                <b className="yellow"> Full-Stack </b>developer,  
                I enjoy tackling new challenges and continuously expanding my skillset.
                <br />
                <br />
                I am proficient in
                <b className="yellow"> C Programming, Python, Java, JavaScript, HTML5, CSS3, ReactJS, Node.js, MongoDB, Bootstrap, NumPy, and Pandas.</b>
                <br />
                <br />
                I have a passion for working
                with <b className="yellow">Node.js, MongoDB,</b> and
                <i>
                  <b className="yellow">
                    {" "}
                    modern Javascript libraries and frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="yellow"> React.js</b>
                </i>
                <br />
                <br />
                I am also interested in building new
                <i>
                  <b className="yellow"> Web Technologies and Products, </b>
                  as well as exploring areas related to
                  <b className="yellow"> Artificial Intelligence.</b>
                </i>
                </p>

                <div className="education-section mt-4">
                  <h3 className="yellow">Education</h3>
                  <div className="education-item mb-3">
                    <h6 className="mb-1">B.Tech in Computer Science</h6>
                    <p className="mb-1">Chaitanya Bharathi Institute of Technology, Hyderabad</p>
                    <p className="mb-1 text-muted">2024–Present | CGPA: 9.79</p>
                  </div>
                  <div className="education-item mb-3">
                    <h6 className="mb-1">Class XII (Intermediate)</h6>
                    <p className="mb-1">Sri Vagdevi Jr College</p>
                    <p className="mb-1 text-muted">2023 | Score: 98.2%</p>
                  </div>
                  <div className="education-item mb-3">
                    <h6 className="mb-1">Class X (SSC)</h6>
                    <p className="mb-1">Krushi Vidhyalayam</p>
                    <p className="mb-1 text-muted">2021 | GPA: 10/10</p>
                  </div>
                </div>

                <div className="achievements-section mt-4">
                  <h3 className="yellow">Certifications</h3>
                  <ul className="list-unstyled">
                
                    <li className="mb-2">• NPTEL Certificate: Problem Solving Through Programming in C</li>
                    <li className="mb-2">• NPTEL Certificate: Programming in Java</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/vinayyarakalapudi"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://linkedin.com/in/vinayyarakalapudi"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:vinayyarakalapudi2006@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="email"
                    >
                      <AiOutlineMail />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default About
