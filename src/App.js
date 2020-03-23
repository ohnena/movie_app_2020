import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "http://image.auction.co.kr/itemimage/1b/45/1b/1b451b2236.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "pizza",
    image: "https://t1.daumcdn.net/cfile/tistory/9907304B5C273F1B0B",
    rating: 3.0
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2> I like {name} too!! </h2>
      <h3> {rating}/5.0</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

//map용 콜백..
function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
      {console.log(foodILike.map(renderFood))}
    </div>
  );
}

export default App;
