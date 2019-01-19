import React from 'react';
import './App.css';

import { Editor } from './components/Editor/Editor';
import { Previewer } from './components/Previewer/Previewer';

import { PLACEHOLDER } from './utils/placeholder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text : '' };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    this.setState({ text : text });
  }

  render() {
    return (
      <div className="App">
        <Editor onTextChange={this.handleTextChange}
        onLoad={this.handleTextChange}/>
        <Previewer innerHtml={this.state.text}/>
      </div>
    );
  }
}

export default App;
