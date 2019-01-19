import React from 'react';
import './Previewer.css';
import { handleClickOnResize } from '../../utils/resize_window';

export class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOnResize = this.handleClickOnResize.bind(this);
  }

  componentDidMount() {
    this.preview = document.getElementById('preview');
  }

  handleClickOnResize(event) {
    handleClickOnResize({
      event : event,
      windowSelector : '.Previewer',
      textAreaSelector : '.text-container',
      defaultWindowCSS : {
        width : '66.67%',
        marginTop : '3rem',
        position : 'static'
      },
      defaultTextAreaCSS : {
        height: 'auto'
      }
    });
  }

  render() {
    if (this.preview) {
      this.preview.innerHTML = this.props.innerHtml;
    }

    return (
      <div className="Previewer text-window">
        <div className="heading">
          <h1>Previewer</h1>
          <span className="resize-button"
          onClick={this.handleClickOnResize}>+</span>
        </div>

        <div id="preview" className="text-container"
        readOnly>
        </div>
      </div>
    );
  }
}
