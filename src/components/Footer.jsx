import React from "react";
import { Card } from "react-bootstrap";

function Footer(props) {
  return (
    <Card className="Footer" bg="dark" variant="dark" text="light">
      <Card.Header>Find Your Future School</Card.Header>
      <Card.Body>
        <Card.Title>Talented Tenth</Card.Title>
        <Card.Text>@2022 TalentedTenth.com</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Footer;
