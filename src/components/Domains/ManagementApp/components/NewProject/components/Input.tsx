import { type ComponentPropsWithoutRef } from 'react';

// styles
import styles from './Input.module.css';

type InputProps = {
  label: string;
  id: string;
  textArea?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ label, id, textArea, ...props }: InputProps) {
  return (
    <p className={styles.customInput}>
      <label htmlFor={id}>{label}</label>
      {textArea ? (
        <textarea className={styles.field} name={label} id={id} />
      ) : (
        <input className={styles.field} id={id} {...props} />
      )}
    </p>
  );
}
