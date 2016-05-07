import React from 'react';
import {Component, render} from 'react';

export default class BlogEditor extends Component {
  render () {
    return <div className="blog-editor">
      <h2>Raw Markdown</h2>
      <textarea className="blog-editor__input"
                rows="20"
                value={this.props.contents}
                onChange={e => this.props.onChangehandler(e.target.value)}/>
      </div>
  }
}
