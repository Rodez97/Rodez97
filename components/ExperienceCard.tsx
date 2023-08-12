import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Button,
} from 'reactstrap';
import { ExperienceType } from '../types/sections';

const ExperienceCard = ({
  companyLogo,
  company,
  role,
  date,
  desc,
  descBullets,
  link,
}: ExperienceType) => {
  return (
    <Col lg="6" className="h-full p-4">
      <Card
        className="shadow-lg--hover h-full mb-3 shadow border-0 text-center rounded"
        style={{
          height: '100%',
        }}
      >
        <CardBody>
          <img
            src={companyLogo}
            style={{
              objectFit: 'contain',
              left: 0,
              right: 0,
              top: '7rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '6rem',
              height: '6rem',
              borderRadius: '20%',
              padding: '1rem',
            }}
            className="shadow mb-3"
            alt={companyLogo}
          />
          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>

            {link && (
              <Button
                className="btn-icon"
                color="success"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-right mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1">Visit Website</span>
              </Button>
            )}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
