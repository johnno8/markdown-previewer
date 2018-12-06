import React, { Component } from 'react';
import marked from 'marked'; 
import './App.css';

const defaultText = 
  `# H1 Header 
## Subheader
[FreeCodeCamp](https://www.freecodecamp.org) - FCC
\`<div>Some code here</div>\` 
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

/*<section class="left">
        <header>
          markdown
        </header>
        <textarea 
          className="content" id="editor"
          value={this.props.input}
          onChange={this.props.handleInput}>
        </textarea>
      </section> */

  render() {
    return (
      <div class="left">
        <div class="header">
          left
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

// <section class="right">
//   <header>
//     preview
//   </header>
//   <div className="content" id="preview" dangerouslySetInnerHTML={this.props.input}>
//   </div>
// </section>

  render() {
    return (
      <div class="right">
        <div class="header">  
          right
        </div>
        <div className="content" id="preview" dangerouslySetInnerHTML={this.props.input}>
        </div>
      </div>
    )
  }
}

export default App;
