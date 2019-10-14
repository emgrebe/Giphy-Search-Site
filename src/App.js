import React from 'react';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=KSr1QErON4lqtCNVSRQZVIF8Mqzd2A1E`;
    
    request.get(url, (err, res) => {
      this.setState=({ gifs: res.body.data})
    });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar
          onTermChange={this.handleTermChange}
        />
        <GifList 
          gifs={this.state.gifs}
        />
      </div>
    )
  }
}

export default App;
