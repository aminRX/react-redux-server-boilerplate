import React from 'react';

export default class CharacterForm extends React.Component {
  render() {
    const inputStyle = {marginRight: '5px'}
    return (
      <tr>
        <td colSpan="4">
          <form action="">
            <input style={inputStyle} name="" type="text" value=""/>
            <input name="" type="text" value=""/>
            <input name="" type="text" value=""/>
          </form>
        </td>
      </tr>
    );
  }
}
