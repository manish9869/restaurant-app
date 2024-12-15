import React from "react";
import MultiplePizzas from "../assets/img1.jpg";
import PizzaMaking from "../assets/img2.jpg";
import CommunityEvent from "../assets/img3.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >
        <h1 className="aboutHeader">Welcome to Pizza Paradise</h1>
      </div>
      <div className="aboutContent">
        <section className="intro">
          <h1>ABOUT US</h1>
          <p>
            Welcome to Pizza Paradise, your ultimate destination for
            mouthwatering pizzas and unforgettable dining experiences. We are a
            family-owned restaurant with a rich tradition of crafting pizzas
            that bring smiles to our customers' faces. From classic recipes to
            creative innovations, our pizzas are made with love, passion, and
            the finest ingredients.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to spread joy through exceptional food and
            warm hospitality. At Pizza Paradise, we strive to create an inviting
            atmosphere where people can connect, celebrate, and savor every
            bite. We believe in delivering quality, consistency, and innovation
            with every pizza we serve.
          </p>
        </section>

        <div className="flexBox">
          <section className="history">
            <h2>Our Story</h2>
            <img
              src={PizzaMaking}
              alt="Pizza making"
              className="responsiveImage"
            />
            <p>
              Founded in 1995 by the Romano family, Pizza Paradise started as a
              small pizzeria with a big dream: to share authentic Italian
              flavors with the world. Over the years, we’ve grown into a beloved
              community hub, known for our dedication to quality and creativity.
              Each pizza we make carries the legacy of our founders’ commitment
              to excellence.
            </p>
          </section>
          <section className="community">
            <h2>Community and Sustainability</h2>
            <img
              src={CommunityEvent}
              alt="Community event"
              className="responsiveImage"
            />
            <p>
              We are proud to be an integral part of our community. From
              sponsoring local events to supporting charitable initiatives, we
              believe in giving back to those who support us. Sustainability is
              also at the core of our operations. From sourcing eco-friendly
              packaging to minimizing food waste, we are committed to protecting
              the planet.
            </p>
          </section>
        </div>

        <section className="invite">
          <h2>Join Us!</h2>
          <p>
            Ready to embark on a pizza journey like no other? Visit Pizza
            Paradise today and let us treat you to a world of flavors. Whether
            you’re dining in, taking out, or ordering delivery, we promise an
            experience that will keep you coming back for more.
          </p>
          <p>
            Don’t forget to check out our weekly specials and seasonal creations
            for something truly extraordinary. At Pizza Paradise, there’s always
            something new to discover!
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
