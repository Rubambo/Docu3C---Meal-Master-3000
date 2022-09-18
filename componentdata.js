import Rest from './componentresto';
import DropDown from './dropdown';
import './componentdata.css';

import React, { useState } from 'react';

function ComponentData (props) {

    const [downlocation, setFilteredLoc] = useState('');
  
    const filterHandler = (selectedlocation) => {
      setFilteredLoc(selectedlocation);
    
  
      const Drop = (event) => {
        const [downlocation, setFilteredLoc] = useState('Besant Nagar');
      }
    }

    const filteredRestos = props.items.filter(restaurant =>{
        return restaurant.location === downlocation;
    })

    return (
        <div className = 'resto_list'>
            <DropDown selected = {downlocation} onChangeFilter={filterHandler}/>
            {filteredRestos.map(restaurant => <Rest name={restaurant.name} distance={restaurant.distance} timing={restaurant.timing} location={restaurant.location}/>)}
        </div>
    )
}

export default ComponentData;