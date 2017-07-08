import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

/*
left: one big input for user
right: output as user types
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    return this.setState({
      value: e.target.value
    }, () => console.log(this.state.value));
  }
  render() {
    return (
      <div className="App">
        <textarea id='theInput' type='text' value={this.state.value} onChange={this.handleChange}/>
        <div dangerouslySetInnerHTML={{__html: marked(this.state.value)}}/>
      </div>
    );
  }
}

export default App;
