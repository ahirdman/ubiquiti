import React from 'react';
import { CheckBox } from '../utils/types';
import { IFilterProps } from '../utils/interfaces';
import close from '../assets/Close-icon.svg';
import './Filter.scss';

const Filter = ({
  setDisplayFilter, checked, setChecked, productLines,
}: IFilterProps) => {
  const handleOnChange = (position: number) => {
    if (!checked) return;
    const updateChecked = checked
      .map((item: CheckBox, index: number) => {
        if (index === position) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      });
    setChecked(updateChecked);
  };

  return (
    <section id="filter" className="filter">
      <section className="filter__control">
        <p className="filter__control--title">Filter</p>
        <img
          src={close}
          alt="close"
          className="filter__control--close"
          onClick={() => setDisplayFilter(false)}
        />
      </section>
      <p className="filter__title">Product Line</p>
      {checked && productLines && (productLines.map((line: string, index: number) => (
        <div className="filter__options" key={index}>
          <input
            className="filter__options--checkbox"
            type="checkbox"
            id={`checkobx-${index}`}
            name={line}
            checked={checked[index].isChecked}
            onChange={() => handleOnChange(index)}
          />
          <label
            htmlFor={`checkobx-${index}`}
            className="filter__options--label"
          >
            {line}
          </label>
        </div>
      )))}
    </section>
  );
};

export default Filter;
