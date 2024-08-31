import { useState } from 'react';

// data
import reactQuestions from './data';

// styles
import classes from './Accordian.module.css';

export default function Accordian() {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSingleSelection(currentId: number) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.accordian}>
        {reactQuestions && reactQuestions.length > 0 ? (
          reactQuestions.map((item) => (
            <div
              key={item.id}
              className={classes.item}
              onClick={() => handleSingleSelection(item.id)}
            >
              <div className={classes.title}>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>

              {selected === item.id ? (
                <div className={classes.content}>{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
