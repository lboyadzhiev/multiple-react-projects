import { type ComponentPropsWithoutRef } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  el: 'button';
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  el: 'anchor';
}

export default function Button(props: ButtonProps | AnchorProps) {
  return props.el === 'anchor' ? (
    <a className={styles.button} {...props}></a>
  ) : (
    <button className={styles.button} {...props}></button>
  );
}
