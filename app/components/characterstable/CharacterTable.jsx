import React from 'react';
import Character from './Character.jsx';
import Power from './Power.jsx';

export default class CharacterTable extends React.Component {
  render() {
    const characters = this.props.characters.map((character, index) => {
      if (character.name.indexOf(this.props.filterText) === -1) {
        return;
      }

      if (!this.props.ki && !this.props.nen ||
          this.props.nen && character.power === 'nen' ||
          this.props.ki && character.power === 'ki') {
        return <Character key={index} id={index} onRemoveCharacter={this.props.onRemoveCharacter} name={character.name} years={character.years} power={character.power} />;
      }
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Poder</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Power power={'Nen'}/>
            {characters}
          </tbody>
        </table>
      </div>
    );
  }
}
