import React from 'react';
import {EntryInput, EntryList} from './Entries';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
    this.onAddEntry = this.onAddEntry.bind(this);
  }

  onAddEntry(value) {
    this.setState((prevState) => ({
      entries: [...prevState.entries, value]
    }));
  }

  render() {
    const entries = this.state.entries;

    return (
      <div className="app">
        <h1>Perfect Match</h1>
        <EntryInput onAdd={this.onAddEntry} />
        <EntryList entries={entries} />
      </div>
    );
  }
}
