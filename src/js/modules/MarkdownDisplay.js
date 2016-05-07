  import React from 'react';
import {Component, render} from 'react';
import marked from 'marked';

export default class MarkdownDisplay extends Component {
  render () {
    let markedOutput = {
      __html: marked(this.props.contents)
    };
    return <div className="markdown-display">
      <h2>Rendered Output</h2>
      <div className="markdown-display__inner" dangerouslySetInnerHTML={markedOutput}></div>
    </div>
  }
}
