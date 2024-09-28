import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// styles
import classes from './StarRating.module.css';

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = [...Array(numOfStars)];

  return (
    <section className={classes.starRating}>
      {stars.map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={
              index <= (hover || rating) ? classes.active : classes.inactive
            }
            key={index}
            onClick={() => setRating(index)}
            onMouseMove={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            size={40}
          />
        );
      })}
    </section>
  );
}
