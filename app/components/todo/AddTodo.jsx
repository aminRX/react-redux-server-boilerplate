import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  nameText: PropTypes.string.isRequired,
};

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onClick(this.props.nameText);
  }

  render() {
    const { nameText } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameText">Name:</label>
          <input id="nameText" type="text" value={nameText} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <p>{nameText}</p>
      </div>
    );
  }
}

AddTodo.propTypes = propTypes;

export default AddTodo;
