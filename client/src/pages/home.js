import React from 'react';
import { graphql } from "react-apollo";
import getAllVaccines from "../queries/getAllVaccines";

class Home extends React.PureComponent{
  renderLoading() {
    return (
      <div> Loading... </div>
    )
  }

  renderVaccinestList() {
    const { vaccines } = this.props;

    return (
      <div> 
        <div>Lista</div>
        <ul>
          {
            vaccines.getAllVaccines.map((vaccine, index) => {
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
    
    return (vaccines.loading) ? this.renderLoading() : this.renderVaccinestList();

  }
};

export default graphql(getAllVaccines, {name: 'vaccines'})(Home);
