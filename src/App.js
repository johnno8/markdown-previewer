import React, { Component } from 'react';
import marked from 'marked'; 
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

  getMarkdownText = () => {
    let rawMarkup = marked(this.state.editorInput, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="App">
        <Editor
          input={this.state.editorInput} 
          handleInput={this.handleChange}/>
        <Preview 
          input={this.getMarkdownText()}/>
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
        <div className="content" id="preview" dangerouslySetInnerHTML={this.props.input}>
        </div>
      </section>
    )
  }
}

export default App;
