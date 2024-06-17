import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishwajeet Shinde </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I have completed my <span className="purple">Post-graduate diploma in Advanced Computing</span> from CDAC,Pune.
            <br />
            I have completed my bachelor's (<span className="purple"> B.Tech. </span>) from Shivaji University, Kolhapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vishwajeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;