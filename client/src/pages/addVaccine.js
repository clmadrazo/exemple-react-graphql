import React from 'react';
import { graphql } from "react-apollo";
import getDoseTypes from "../queries/getDoseTypes"; 

class AddVacine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      doseType: 'unique'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    const { name, value } = event.target;
    let state = {};
    switch (name) {
      case 'title':
        state = { title: value };
        break;
      case 'description':
        state = { description: value }
        break;
      case 'doseType':
        state = { doseType: value }
        break;
    }
    this.setState(state);
  }

  renderForm() {
    const { doseType } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={this.onHandleSubmit}>
          <label>Title:
        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </label>
          <label>Description:
        <input type="text" name="description" onChange={this.onChange} value={this.state.description} />
          </label>
          <label>
            <select name="doseType" onChange={this.onChange}>
            {
            doseType.__type.enumValues.map((doseType, index) => {
              return (
                <option key={index} value={doseType.name}>{doseType.name}</option>
              );
            })
          }  
            </select>
          </label>
          <input type="submit" value="Save"/>
      </form>
      );
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  render() {
    const { doseType } = this.props;
    return (doseType.loading) ? this.renderLoading() : this.renderForm();
  }
}

export default graphql(getDoseTypes, {name: "doseType"} )(AddVacine);