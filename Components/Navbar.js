import React from "react";
import Header from "./Header";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

export default function Navibar() {
  return (
    <div>
      <a href="/">
        <h1> Online Booking Ticket Movie</h1>
      </a>
      {/* <form>
        <input type="textbox" placeholder="Search"></input>
      </form>
      <hr />
      <Header /> */}

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/latest">Latest Movies</Nav.Link>
          <Nav.Link href="/upcoming">Upcoming Movies</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
