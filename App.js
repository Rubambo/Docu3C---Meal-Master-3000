import React from 'react';
import ComponentData from './components/componentdata'
import './components/componentresto.css';
import './App.css';

function App() {

  const resto = [
    {
      identity: 'a1',
      distance: '5 kms',
      name: 'Little Italy',
      timing: 'Open till 10pm',
      location: 'Besant Nagar'
    },
    {
      identity: 'a2',
      distance: '3.2 kms',
      name: 'Burger King',
      timing: 'Open 24/7',
      location: 'Besant Nagar'
    },
    {
      identity: 'a3',
      distance: '0.9 kms',
      name: 'Hamsa Multicuisine',
      timing: 'Open till 9pm (with reservations)',
      location: 'Adyar'
    },
    {
      identity: 'a4',
      distance: '3.7 kms',
      name: 'Dunkin Donuts',
      timing: 'Open till 11pm',
      location: 'Adyar'
    },
    {
      identity: 'a5',
      distance: '4 kms',
      name: 'Taco Bell',
      timing: 'Open 24/7',
      location: 'Tambaram'
    },
    {
      identity: 'a6',
      distance: '2.4 kms',
      name: 'Saravana Bhavan',
      timing: 'Open till 8pm',
      location: 'Tambaram'
    },
    {
      identity: 'a7',
      distance: '3.3 kms',
      name: 'ITC Grand Chola',
      timing: 'Open 24/7 with reservations',
      location: 'Thiruvanmiyur'
    },
    {
      identity: 'a8',
      distance: '1.9 kms',
      name: 'Ratna Cafe',
      timing: 'Open till 10pm',
      location: 'Thiruvanmiyur'
    },
    {
      identity: 'a9',
      distance: '0.6 kms',
      name: 'Pizza Hut',
      timing: 'Open till 10pm',
      location: 'Velachery'
    },
    {
      identity: 'a10',
      distance: '4.7 kms',
      name: 'Wangs Kitchen',
      timing: 'Open till 11:30pm',
      location: 'Velachery'
    },
    {
      identity: 'a11',
      distance: '3 kms',
      name: 'Chai Galli',
      timing: 'Open till 9pm with reservations',
      location: 'Guindy'
    },
    {
      identity: 'a12',
      distance: '2.2 kms',
      name: 'Dominos',
      timing: 'Open 24/7',
      location: 'Guindy'
    },
    {
      identity: 'a13',
      distance: '2 kms',
      name: 'Haven Sampoorna',
      timing: 'Open 24/7',
      location: 'Saidapet'
    },
    {
      identity: 'a14',
      distance: '2.7 kms',
      name: 'Starbucks',
      timing: 'Open till 10pm',
      location: 'Saidapet'
    },
    {
      identity: 'a15',
      distance: '5 kms',
      name: 'Cafe Coffee Day',
      timing: 'Open 24/7',
      location: 'Mahabalipuram'
    }
  ]
  


  return (
    <div>
      <h1 className = 'bill-split'>WELCOME TO MEAL MASTER 3000!</h1>
      <h2 className = 'bill-split h2'>Select your locality and get the best tasting food under 5 kilometers delivered to your doorstep</h2>
      <ComponentData items = {resto} />
    </div>
  );

  }

  

export default App;
