import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// styles
import styles from './StarRating.module.css';

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = [...Array(numOfStars)];

  return (
    <section className={styles.starRating}>
      {stars.map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={
              index <= (hover || rating) ? styles.active : styles.inactive
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
