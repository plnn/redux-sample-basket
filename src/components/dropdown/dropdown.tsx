import { ChangeEvent } from "react";
import "./dropdown.scss";
interface IDropdownProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = ({ label, value, options, onChange }: IDropdownProps) => {
  return (
    <label className="dropdown">
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};
export default Dropdown;
