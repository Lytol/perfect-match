import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class EntryInput extends React.Component {
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
        <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
        <button onClick={this.addEntry}>Add</button>
      </div>
    );
  }
}

EntryInput.propTypes = {
  onAdd: PropTypes.func.isRequired
};

function EntryList(props) {
  const entries = props.entries;
  const onRemove = props.onRemove;

  const entryItems = entries.map((value) =>
    <Entry key={value.toString()} value={value} onRemove={onRemove} />
  );

  return (
    <ul className="entry-list">
      {entryItems}
    </ul>
  );
}

EntryList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired
};

function Entry(props) {
  const value = props.value;
  const onRemove = props.onRemove;

  return (
    <li className="entry">
      <div className="entry-value">{value}</div>
      <i className="entry-remove material-icons" onClick={() => onRemove(value)}>remove_circle_outline</i>
    </li>
  );
}

Entry.propTypes = {
  value: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
    this.onAddEntry = this.onAddEntry.bind(this);
    this.onRemoveEntry = this.onRemoveEntry.bind(this);
  }

  onAddEntry(value) {
    this.setState((prevState) => ({
      entries: [...prevState.entries, value]
    }));
  }

  onRemoveEntry(value) {
    this.setState((prevState) => ({
      entries: _.filter(prevState.entries, (v) => v != value)
    }));
  }

  render() {
    const entries = this.state.entries;

    return (
      <div className="entries">
        <EntryInput onAdd={this.onAddEntry} />
        <EntryList entries={entries} onRemove={this.onRemoveEntry} />
      </div>
    );
  }
}
