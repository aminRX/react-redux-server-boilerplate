import React from 'react';
import SearchCharacter from './searchCharacter.jsx';
import ChacterTable from './CharacterTable.jsx';

export default class FilterableCharacterTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: this.props.characters,
      filterText: '',
      nen: false,
      ki: false
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleNenInput = this.handleNenInput.bind(this);
    this.handleKiInput = this.handleKiInput.bind(this);
    this.handleRemoveCharacter = this.handleRemoveCharacter.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleNenInput(nen) {
    this.setState({
      nen: nen
    });
  }

  handleKiInput(ki) {
    this.setState({
      ki: ki
    });
  }

  handleRemoveCharacter(id) {
    this.setState((prevState) => ({
      characters: prevState.characters.filter((_, i) => i !== id)
    }));
  }

  render() {
    return (
      <div>
        <SearchCharacter
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
          onNenInput={this.handleNenInput}
          nen={this.state.nen}
          ki={this.state.ki}
          onKiInput={this.handleKiInput}
        />
        <ChacterTable
          characters={this.state.characters}
          filterText={this.state.filterText}
          nen={this.state.nen}
          ki={this.state.ki}
          onRemoveCharacter={this.handleRemoveCharacter}
        />
      </div>
    );
  }
};
