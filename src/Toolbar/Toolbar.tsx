import React from 'react'
import './Toolbar.scss'
import listDefault from '../assets/list/list-default.svg'
import listActive from '../assets/list/list-active.svg'
import gridDefault from '../assets/grid/grid-default.svg'
import gridActive from '../assets/grid/grid-active.svg'

type ToolbarProps = {
  gridView: any
  setGridView: any
}

const Toolbar = ({ gridView, setGridView }: ToolbarProps) => {
  return (
    <nav className='toolbar'>
      <input type='text' placeholder='Search' className='toolbar__search' />
      {/* <h2 className='toolbar__label'>Label</h2> */}
      <section className='toolbar__options'>
        <img
          className='toolbar__options--list'
          src={gridView ? listDefault : listActive}
          alt='list-wiew'
          onClick={() => setGridView(false)} />
        <img
          className='toolbar__options--grid'
          src={gridView ? gridActive : gridDefault}
          alt='grid-view'
          onClick={() => setGridView(true)} />
        <p className='toolbar__options--filter'>Filter</p>
      </section>
    </nav>
  )
}

export default Toolbar;
