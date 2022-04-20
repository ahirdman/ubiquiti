import React from 'react';
import { productLines } from '../utils';
import { CheckBox } from '../utils/types';
import { IFilterProps } from '../utils/interfaces';
import close from '../assets/Close-icon.svg';
import './Filter.scss';

const Filter = ({ setDisplayFilter, checked, setChecked }: IFilterProps) => {
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
      {checked && (productLines.map((line: string, index: number) => (
        <div className="filter__option" key={index}>
          <input
            type="checkbox"
            id={`checkobx-${index}`}
            name={line}
            checked={checked[index].isChecked}
            onChange={() => handleOnChange(index)}
          />
          <label htmlFor={`checkobx-${index}`}>{line}</label>
        </div>
      )))}
    </section>
  );
};

export default Filter;
