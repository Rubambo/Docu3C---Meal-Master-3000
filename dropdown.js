import React from 'react';

import './dropdown.css';

const DropDown = (props) => {

    const ddHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label className = 'expenses-filter'>Filter by location</label>
        <select value={props.selected} onChange = {ddHandler}>
          <option value='Besant Nagar'>Besant Nagar</option>
          <option value='Adyar'>Adyar</option>
          <option value='Tambaram'>Tambaram</option>
          <option value='Thiruvanmiyur'>Thiruvanmiyur</option>
          <option value='Velachery'>Velachery</option>
          <option value='Guindy'>Guindy</option>
          <option value='Saidapet'>Saidapet</option>
          <option value='Mahabalipuram'>Mahabalipuram</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;