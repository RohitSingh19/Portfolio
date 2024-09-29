import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import homeLogo from "../../assets/home-main.svg";
import portfolioData from "../../assets/portfolio-data";
import Type from "./Type";
import SocialIcons from "./SocialIcons";
import myImg from "../../assets/Rohit-Pic.png";
import Tilt from "react-parallax-tilt";


const Home: React.FC = () => {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {portfolioData.greetingMessage}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                I'M<strong className="main-name"> {portfolioData.userName}</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type items={portfolioData.userProfessions}/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Few words about <span className="multi-color-text"> myself! </span> 
            </h1>
            <p className="home-about-body">
              <br /> From starting off with the simple <b className="purple">Hello World</b> example to solving <b className="purple">complex real-world </b> problems,
              my programming journey has been amazing. Despite knowing some of the best things from the <b className="purple">Programming World </b> I still consider myself a learner. <br /> 
              <br />Currently, I'm working as <b className="purple">Full Stack Developer</b> and my technical skills include
              <i>
                <b className="purple"> OOP, Data Structures and Algorithms, Rest API, C#, Java, .Net Core, SQL, Azure, Git, CI/CD, Angular and ReactJs. </b>
              </i>
              <br />
              <br />
              My day to day tasks mainly include coverting requirements into efficient and scalable code 
              to build things from scratch or to make improvement in existing feature. 
              <br />
              <br />
                I like making fun & interactive things with code. I also love to talk & write about those things.
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              You can <span className="purple">connect </span>with me on below social channels!
            </p>
            {<SocialIcons links={portfolioData.socialLinks}/>}
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
};

export default Home;
