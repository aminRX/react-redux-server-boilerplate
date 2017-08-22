import React from 'react';
import EditCharacter from './EditCharacter.jsx';
import RemoveCharacter from './RemoveCharacter.jsx';

export default class Character extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.years}</td>
        <td>{this.props.power}</td>
        <td>
          <EditCharacter />
        </td>
        <td>
          <RemoveCharacter
            id={this.props.id}
            onRemoveCharacter={this.props.onRemoveCharacter}
          />
        </td>
      </tr>
    );
  }
}
