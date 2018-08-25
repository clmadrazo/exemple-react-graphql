import React from 'react';
import { graphql } from "react-apollo";
import getAllVaccines from "../queries/getAllVaccines";

class Home extends React.PureComponent{
  renderLoading() {
    return (
      <div> Loading... </div>
    )
  }

  renderVaccinestList(vaccines) {
    return (
      <div> 
        <div>Lista</div>
        <ul>
          {
            vaccines.map((vaccine, index) => {
              return (
                <li key={index}>{vaccine.title} - {vaccine.description}</li>
              );
            })
          }  
        </ul>
      </div>
    )
  }

  render() {
    console.log(this.props);
    const { vaccines } = this.props;
    
    return (vaccines.loading) ? this.renderLoading() : this.renderVaccinestList(vaccines.getAllVaccines)

  }
};

export default graphql(getAllVaccines, {name: 'vaccines'})(Home);
