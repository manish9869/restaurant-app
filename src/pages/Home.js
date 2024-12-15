import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza_cover.svg";
import PizzaImage1 from "../assets/pizza1.jpg";
import PizzaImage2 from "../assets/pizza2.jpg";
import PizzaImage3 from "../assets/pizza3.jpg";
import PizzaImage4 from "../assets/pizza4.jpg";
import PizzaImage5 from "../assets/pizza5.jpg";
import PizzaImage6 from "../assets/pizza6.jpeg";
import PizzaImage7 from "../assets/pizza7.jpg";
import PizzaImage8 from "../assets/pizza8.jpg";
import "../styles/Home.css";

function Home() {
  const pizzas = [
    { image: PizzaImage1, name: "Regular Pizza", description: "A classic, hearty pizza with a thick crust, topped with rich tomato sauce, mozzarella, and fresh toppings." },
    { image: PizzaImage2, name: "Thin Crust Pizza", description: "Our light and crispy thin crust pizza, topped with fresh ingredients and a delicate layer of cheese." },
    { image: PizzaImage3, name: "Margherita", description: "A simple yet delicious pizza topped with fresh basil, tomato, and mozzarella." },
    { image: PizzaImage4, name: "Pepperoni", description: "A pizza topped with spicy pepperoni, mozzarella, and a rich tomato sauce." },
    { image: PizzaImage5, name: "Vegetarian", description: "A delightful mix of fresh vegetables, mozzarella, and a tangy tomato sauce." },
    { image: PizzaImage6, name: "BBQ Chicken", description: "A smoky BBQ sauce pizza with grilled chicken, red onions, and a sprinkle of cheese." },
    { image: PizzaImage7, name: "Hawaiian", description: "A tropical pizza with ham, pineapple, and mozzarella, offering the perfect sweet and savory combo." },
    { image: PizzaImage8, name: "Seafood", description: "A seafood pizza topped with shrimp, scallops, and a garlic-infused tomato sauce." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('forward'); 
  const [slideCount, setSlideCount] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 'forward') {
        // Move forward
        if (slideCount < 4) {
          setCurrentIndex(prevIndex => (prevIndex + 1) % pizzas.length);
          setSlideCount(prevCount => prevCount + 1);
        } else {
          setDirection('reverse');
          setSlideCount(0);
        }
      } else if (direction === 'reverse') {
        // Move backward
        if (slideCount < 4) {
          setCurrentIndex(prevIndex => (prevIndex - 1 + pizzas.length) % pizzas.length);
          setSlideCount(prevCount => prevCount + 1);
        } else {
          setDirection('forward');
          setSlideCount(0); 
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [direction, slideCount]);

  const transformValue = -currentIndex * 330; 

  return (
    <div className="home">
      <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Pedro's Pizzeria</h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>

      <div className="imageSection">
        <h2>Our Delicious Pizzas</h2>
        <div className="pizzaImagesContainer">
          <div className="pizzaImages" style={{ transform: `translateX(${transformValue}px)` }}>
            {pizzas.map((pizza, index) => (
              <div className="pizzaInfo" key={index}>
                <img src={pizza.image} alt={pizza.name} className="pizzaImage" />
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="testimonials">
  <h2>What Our Customers Say</h2>
  <div className="testimonialCard">
    <p>"Best pizza I've ever had! Will definitely order again."</p>
    <p>- John D.</p>
  </div>
  <div className="testimonialCard">
    <p>"Incredible flavors and fast delivery. Highly recommend!"</p>
    <p>- Sarah M.</p>
  </div>
  <div className="testimonialCard">
    <p>"The BBQ Chicken pizza is a game-changer. So delicious!"</p>
    <p>- Mark T.</p>
  </div>
  <div className="testimonialCard">
    <p>"Exceptional service and quality. This is my go-to pizzeria!"</p>
    <p>- Emily R.</p>
  </div>
  <div className="testimonialCard">
    <p>"The vegetarian pizza was fresh and packed with flavor. A must-try!"</p>
    <p>- Olivia K.</p>
  </div>
</div>

    </div>
  );
}

export default Home;
