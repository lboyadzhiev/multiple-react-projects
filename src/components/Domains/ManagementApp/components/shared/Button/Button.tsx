import { type ReactNode } from 'react';

//styles
import styles from './Button.module.css';

type buttonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
export default function Button({ children, disabled, onClick }: buttonProps) {
  return (
    <button disabled={disabled} className={styles.btn}>
      {children}
    </button>
  );
}
