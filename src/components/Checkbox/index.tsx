import { InputHTMLAttributes, useId } from "react";

import "./index.css";

export interface CheckboxChangeEvent {
  value: string;
  checked: boolean;
}

interface CheckboxProps extends Omit<InputHTMLAttributes<unknown>, "onChange"> {
  value: string;
  label: string;
  onChange: (event: CheckboxChangeEvent) => void;
}

const Checkbox = ({ label, value, ...props }: CheckboxProps) => {
  const unqiueId = useId();
  const id = unqiueId + value;

  const handleChange = () => {
    props.onChange({ checked: !props.checked, value });
  };

  return (
    <div className="checkbox-wrapper">
      <label className="checkbox-label" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        onChange={handleChange}
        value={value}
        type="checkbox"
        id={id}
      />
      <span onClick={handleChange} className="checkbox"></span>
    </div>
  );
};

export default Checkbox;
