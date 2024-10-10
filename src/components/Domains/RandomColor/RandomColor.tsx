import { useState } from 'react';

// styles
import styles from './RandomColor.module.css';

export default function RandomColor() {
  const [color, setColor] = useState('#000000');

  function generateIndex(length: number) {
    return Math.floor(Math.random() * length);
  }

  function generateColorHandler(typeOfColor: string) {
    if (typeOfColor === 'hex') {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let hexColor = '#';

      for (let i = 0; i < 6; i++) {
        hexColor += hex[generateIndex(hex.length)];
      }

      setColor(hexColor);
    } else if (typeOfColor === 'rgb') {
      const r = generateIndex(256);
      const g = generateIndex(256);
      const b = generateIndex(256);

      setColor(`rgb(${r}, ${g}, ${b})`);
    }
  }

  return (
    <div className={styles.container} style={{ background: color }}>
      <div className={styles.btnContainer}>
        <button onClick={() => generateColorHandler('hex')}>
          Create HEX Color
        </button>
        <button onClick={() => generateColorHandler('rgb')}>
          Create RGB Color
        </button>
      </div>

      <div className={styles.colorString}>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
