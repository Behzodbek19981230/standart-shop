import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Row,
  Card,
  CardBody,
  Container,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import Field from "../components/Field";
import UsefulLinks from "../components/UsefulLinks";
import Documents from "../components/Documents";
import FilterBar from "../components/document/FilterBar";
import LeftBar from "../components/document/LeftBar";
import ListDocument from "../components/document/ListDocument";

export default function DocumentsPage() {
  const [dateArrange, setDateArrange] = React.useState(false);
  const [effectiveDate, setEffectiveDate] = React.useState(false);
  return (
    <React.Fragment>
      <Container>
        <FilterBar />
        <Row>
          <Col md={4}>
            <LeftBar />
          </Col>
          <Col md={8}>
            <ListDocument />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
