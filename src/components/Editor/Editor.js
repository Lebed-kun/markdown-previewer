import React from 'react';
import './Editor.css';

import { renderMD } from '../../utils/render_md';
import { PLACEHOLDER } from '../../utils/placeholder';
import { handleClickOnResize } from '../../utils/resize_window';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOnResize = this.handleClickOnResize.bind(this);
  }

  handleChange(event) {
    const renderedHTML = renderMD(event.target.value);
    this.props.onTextChange(renderedHTML);
  }

  handleClickOnResize(event) {
    handleClickOnResize({
      event : event,
      windowSelector : '.Editor',
      textAreaSelector : '.text-container',
      defaultWindowCSS : {
        width : '50%',
        marginTop : '3rem',
        position : 'static'
      },
      defaultTextAreaCSS : {
        height : '0'
      }
    });
  }

  componentDidMount() {
    const renderedHTML = renderMD(PLACEHOLDER);
    this.props.onLoad(renderedHTML);
  }

  render() {

    return (
      <div className="Editor text-window">
        <div className="heading">
          <h1>Editor</h1>
          <span className="resize-button"
          onClick={this.handleClickOnResize}>+</span>
        </div>

        <textarea id="editor" className="text-container"
        onChange={this.handleChange}>
          {PLACEHOLDER}
        </textarea>
      </div>
    );
  }
}
