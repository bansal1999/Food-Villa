// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

/*

      -->  Header
          - Logo itle
          -Nav Items (Righy Side)
          -Cart
      -->  Body
          - Search Bar
          -Restraunt list
            -Restaurat Card (many card)
              -Image
              -Name
              -Rating
              -Cusines
      -->  Footer
            -Links
            -copyrights

*/

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component
// Title component is functional component
const Title = () => {
  return (
    // <h1 id="title" key="h2">
    //   FOOD VILLA
    // </h1>
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
      />
    </a>
  );
};
// Header component is functional component
const Header = () => {
  return (
    <div className="header">
      <Title />
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/225px-Burger_King_2020.svg.png" />
      <h2>Burgur King</h2>
      <h3> Burger, american</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
