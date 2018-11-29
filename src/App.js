import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorInput: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      editorInput: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Editor
          input={this.state.editorInput} 
          handleInput={this.handleChange}/>
        <Preview 
          input={this.state.editorInput}/>
      </div>
    );
  }
}

class Editor extends Component {

  render() {
    return (
      <section class="left">
        <header>
          markdown
        </header>
        <textarea 
          className="content" id="editor"
          value={this.props.input}
          onChange={this.props.handleInput}>
        </textarea>
      </section>
    )
  }
}

class Preview extends Component {

  render() {
    return (
      <section class="right">
        <header>
          preview
        </header>
        <div className="content" id="preview">
          {this.props.input}
        </div>
      </section>
    )
  }
}

export default App;
