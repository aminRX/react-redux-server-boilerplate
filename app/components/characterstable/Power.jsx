import React from 'react';

export default class Power extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.power}</td>
      </tr>
    );
  }
}
