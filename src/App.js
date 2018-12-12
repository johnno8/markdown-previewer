import React, { Component } from 'react';
import marked from 'marked'; 
import './App.css';

const defaultText = 
  `# H1 Header 
## Subheader
Here's a link [FreeCodeCamp](https://www.freecodecamp.org) - FCC

Inline code \`<div>Some code here</div>\` goes here

Code block:
\`\`\`sh 
$ cd dillinger
$ npm install -d
$ node app
\`\`\`
* Unordered list item
* Another unordered list item
1 Ordered sub-list item
2 Another ordered sub-list item

> Throw in a blockquote
> still blockquoting

Here's an image:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

**This is bold text**

Bigger image:
![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorInput: defaultText
    }
  }

  handleChange = (event) => {
    this.setState({
      editorInput: event.target.value
    })
  }

  getMarkdownText = () => {
    let rawMarkup = marked(this.state.editorInput, {
      gfm: true,
      breaks: true,
      sanitize: true
    });
    return { __html: rawMarkup };
  }

  numChars = () => {
    return this.state.editorInput.length ? this.state.editorInput.length : 0;
  }

  render() {
    return (
      <div className="App">
        <Editor
          input={this.state.editorInput} 
          handleInput={this.handleChange}
          numChars={this.numChars()}/>
        <Preview 
          input={this.getMarkdownText()}/>
      </div>
    );
  }
}

class Editor extends Component {

  render() {
    return (
      <div class="left">
        <div class="header">
          <div class="header-title">Markdown editor</div>
          <div class="char-count">Characters: {this.props.numChars}</div>
        </div>
        <textarea className="content" id="editor"
          value={this.props.input}
          onChange={this.props.handleInput}>
        </textarea>
      </div>
    )
  }
}

class Preview extends Component {

  render() {
    return (
      <div class="right">
        <div class="header">  
          Preview
        </div>
        <div className="content" id="preview" dangerouslySetInnerHTML={this.props.input}>
        </div>
      </div>
    )
  }
}

export default App;
