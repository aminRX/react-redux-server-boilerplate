import React from 'react';

export default class RemoveCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick(e) {
    this.props.onRemoveCharacter(this.props.id)
  }

  render() {
    return (
      <button onClick={this.handleRemoveClick}>
        Eliminar personaje.
      </button>
    );

  }
}
