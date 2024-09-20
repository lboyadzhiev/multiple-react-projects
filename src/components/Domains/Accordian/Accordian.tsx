import { useState } from 'react';

// data
import reactQuestions from './data';

// styles
import classes from './Accordian.module.css';

export default function Accordian() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isMultiSelection, setIsMultiSelection] = useState(false);

  function handleEnableMultiSelection() {
    setIsMultiSelection((state) => !state);

    if (isMultiSelection && selectedItems.length > 1) setSelectedItems([]);
  }

  function handleSelection(currentId: number) {
    let selected = [...selectedItems];

    const indexOfCurrenctId = selected.indexOf(currentId);

    if (indexOfCurrenctId !== -1) {
      isMultiSelection
        ? selected.splice(indexOfCurrenctId, 1)
        : (selected = []);
    } else {
      isMultiSelection ? selected.push(currentId) : (selected = [currentId]);
    }

    setSelectedItems(selected);
  }

  return (
    <div className={classes.wrapper}>
      <button
        onClick={handleEnableMultiSelection}
        className={`${classes.selectBtn} ${
          isMultiSelection ? classes.mlctBtn : ''
        }`}
      >
        Enable Multi Selection
      </button>
      <div className={classes.accordian}>
        {reactQuestions && reactQuestions.length > 0 ? (
          reactQuestions.map((item) => (
            <div
              key={item.id}
              className={classes.item}
              onClick={() => handleSelection(item.id)}
            >
              <div className={classes.title}>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>

              {selectedItems.includes(item.id) ? (
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
