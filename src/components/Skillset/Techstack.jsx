import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNumpy,
  SiPandas,
  SiC,
  SiMysql
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";

const Techstack = () => {
  const techStack = [
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiC />, name: "C" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <div style={{ fontSize: "0.4em", marginTop: "4px", color: "white", fontWeight: "bold" }}>
            {tech.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
