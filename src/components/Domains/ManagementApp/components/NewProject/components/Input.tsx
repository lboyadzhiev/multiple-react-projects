import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
  textArea?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ label, id, textArea, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      {textArea ? (
        <textarea name={label} id={id} />
      ) : (
        <input id={id} {...props} />
      )}
    </p>
  );
}
