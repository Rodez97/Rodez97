import React from 'react';
import { experience } from '../portfolio';
import { Container, Row } from 'reactstrap';
import ExperienceCard from '../components/ExperienceCard';
import { Fade } from 'react-awesome-reveal';

const Experience = () => {
  return (
    experience && (
      <section className="section section-lg">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Experience & Projects</h4>
            </div>
          </div>
          <Fade direction="left" duration={2000}>
            <Row className="grid row-grid items-stretch justify-items-stretch">
              {experience.map((data, i) => {
                return <ExperienceCard key={i} {...data} />;
              })}
            </Row>
          </Fade>
        </Container>
      </section>
    )
  );
};

export default Experience;
