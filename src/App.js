import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div className='App'>
        <SearchBar
          onTermChange={this.handleTermChange}
        />
      </div>
    )
  }
}

export default App;
