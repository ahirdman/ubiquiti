import React, { useState } from 'react';
import close from '../assets/Close-icon.svg';
import './Filter.scss';

type FilterProps = {
  setDisplayFilter: any
}

function Filter({ setDisplayFilter }: FilterProps) {
  const [lineFilter, setLineFilter] = useState();

  const productLines = ['UniFi', 'UniFi LTE', 'UniFi Protect', 'UniFi Access', 'airMax', 'edgeMax'];

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
      {productLines.map((name:string, index:number) => (
        <div className="filter__option" key={index}>
          <input
            type="checkbox"
            id={`checkobx-${index}`}
            name={name}
            checked={lineFilter}
            onChange={() => console.log('hello')}
          />
          <label htmlFor={`checkobx-${index}`}>{name}</label>
        </div>
      ))}
    </section>
  );
}

export default Filter;
