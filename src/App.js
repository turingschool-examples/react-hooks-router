import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom'
import Home from './Home'
import Creatures from './Creatures'
import CreatureDetails from './CreatureDetails'
import unicorns from './data/unicorn-data'
import puppies from './data/puppy-data'
import sharks from './data/shark-data'
import './App.css';

const App = () => {
  const data = { unicorns, puppies, sharks };
  const home = useRouteMatch({ path: '/', exact: true });
  const creatures = useRouteMatch({ path: '/:creature', exact: true })
  const creature = useRouteMatch({ path: '/:creature/:id' })

  return (
    <main className="App">
      <header>
        <NavLink to='/unicorns' className='nav'> Unicorns </NavLink>
        <NavLink to='/puppies' className='nav'> Puppies </NavLink>
        <NavLink to='/sharks' className='nav'> Sharks </NavLink>
      </header>
      {home && <Home />}
      {creatures && <Creatures data={data[creatures.params.creature]} />}
      {creature && <CreatureDetails
        data={data[creature.params.creature]}
        id={creature.params.id}
      />
      }
    </main>
  );
}

export default App;