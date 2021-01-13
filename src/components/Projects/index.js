import React, { useState } from 'react';
import PortfolioList from '../PortfolioList/index';
import portfolio from './portfolios.json';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects(props) {
  const [ portfolioList ] = useState(portfolio);
  return (
    <section>
      {
      portfolioList.map(function(item) {
        return <PortfolioList id = {item.id} image = {item.image} name = {item.name} occupation = {item.occupation} location = {item.location} />
      })
    }
      
      
    </section>
  );
}
export default Projects;