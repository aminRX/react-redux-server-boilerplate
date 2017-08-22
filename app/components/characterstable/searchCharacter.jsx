import React from 'react';

export default class SearchCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleNenInputChange = this.handleNenInputChange.bind(this);
    this.handleKiInputChange = this.handleKiInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleNenInputChange(e) {
    this.props.onNenInput(e.target.checked);
  }

  handleKiInputChange(e) {
    this.props.onKiInput(e.target.checked);
  }

  render() {
    const divStyle = {
      display: 'inline-flex'
    };

    return (
      <form>
        <input
          type="text"
          placeholder="Buscar personaje"
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <div style={divStyle}>
          <p>
            <input
              type="checkbox"
              checked={this.props.nen}
              onChange={this.handleNenInputChange}
            />
            Nen
          </p>
          <p>
            <input
              type="checkbox"
              checked={this.props.ki}
              onChange={this.handleKiInputChange}
            />
            Ki
          </p>
        </div>
      </form>
    );
  }
}
