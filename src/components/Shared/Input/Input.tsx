import { type ComponentPropsWithoutRef } from 'react';

import styles from './Input.module.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p className={styles.InputContainer}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
