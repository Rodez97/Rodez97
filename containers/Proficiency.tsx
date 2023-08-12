import React from 'react';
import { SkillBars } from '../portfolio';
import { Container, Row, Progress, Col } from 'reactstrap';
import { Fade } from 'react-awesome-reveal';
import GreetingLottie from '../components/DisplayLottie';
import buildAnimation from '../lottie/build.json';

const Proficiency = () => {
  return (
    SkillBars && (
      <section className="section bg-gradient-dark">
        <Container>
          <Fade direction="left" duration={2000}>
            <Row>
              <Col lg="6">
                <h1 className="h1 text-white">Proficiency</h1>
                {SkillBars.map((skill) => {
                  return (
                    <div className="progress-info" key={skill.Stack}>
                      <div className="progress-label">
                        <span className="text-white">{skill.Stack}</span>
                      </div>
                      <div className="progress-percentage">
                        <span className="text-white">
                          {skill.progressPercentage}%
                        </span>
                      </div>
                      <Progress
                        max="100"
                        value={skill.progressPercentage}
                        color="info"
                        role="progressbar"
                        aria-label={skill.Stack}
                      />
                    </div>
                  );
                })}
              </Col>
              <Col lg="6">
                <GreetingLottie animationData={buildAnimation} />
              </Col>
            </Row>
          </Fade>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    )
  );
};

export default Proficiency;
