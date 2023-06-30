import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import wa from '../assets/img/wa.svg';
import github from '../assets/img/github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-4">
            <div className="social-icon">
              <a href="https://github.com/Faizalilham"><img src={github} alt="Icon" /></a>
              <a href="https://instagram.com/faizalfalakh"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://wa.me/62895421971694"><img src={wa} width="1000px" height="100px" alt="Icon" /></a>
            </div>
            <p className="mt-2">Copyright 2023. Faizalilham</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
