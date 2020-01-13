import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const CreatureDetails = ({ data, id }) => {
  const { name, image, bio, type } = data.find(creature => creature.id === parseInt(id));

  return (
    <div>
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      <h1>{name}</h1>
      <img src={image} alt='' className='app-img-no-hover' />
      <p className='creature-bio'>{bio}</p>
    </div>
  )
}

export default CreatureDetails;