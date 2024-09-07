/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CheckBox: React.FC<{
  label: string;
  className?: string;
  checked: boolean;
  setChecked: (status: boolean) => void;
}> = ({ label, checked, setChecked, className }) => (
  <div className="form-control w-fit">
    <label className="label flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e): void => {
          setChecked(e.target.checked);
        }}
        className="checkbox-primary checkbox"
      />
      <span className={`label-text mr-2 ${className}`}>{label}</span>
    </label>
  </div>
);

export default CheckBox;
