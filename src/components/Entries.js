import React from 'react';
import PropTypes from 'prop-types';

export class EntryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }

  addEntry() {
    this.props.onAdd(this.state.value);
    this.setState({ value: "" });
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="entry-input">
        <input type="text" value={this.state.value} onChange={(e) => this.handleInputChange(e)}/>
        <button onClick={() => this.addEntry()}>Add</button>
      </div>
    );
  }
}

EntryInput.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export class EntryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const entries = this.props.entries;
    const entryItems = entries.map((value) =>
      <Entry key={value.toString()} value={value} />
    );

    return (
      <ul className="entry-list">
        {entryItems}
      </ul>
    );
  }
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string).isRequired
};

class Entry extends React.Component {
  render() {
    const value = this.props.value;

    return (
      <div className="entry">
        {value}
      </div>
    );
  }
}

Entry.propTypes = {
  value: PropTypes.string.isRequired
};
