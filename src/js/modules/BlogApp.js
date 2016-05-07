require('stylesheets/blog.scss');
import React from 'react';
import {Component, render} from 'react';
import BlogEditor from './BlogEditor';
import MarkdownDisplay from './MarkdownDisplay';

export default class BlogApp extends Component {
  constructor () {
    super()
    this.state = {
      input: '### Start writing'
    }
  }

  handleOnChange (input) {
    this.setState({input})
  }

  handleOnClick () {
    window.alert(this.state.input)
  }

  render () {
    let charCount  = this.state.input.length;
    let disabled   = charCount < 1;
    return <div className="react-blog-editor">
      <h2 className="blog-header">React:</h2>
      <h3>HTML Reference</h3>
      <div className="input-meta">
        <button className="submit-button"
                disabled={disabled}
                onClick={this.handleOnClick.bind(this)}>Submit my blog post</button>
        <span className="word-count">Current character count: {charCount}</span>
      </div>
      <div className="input-area">
        <BlogEditor contents={this.state.input} onChangehandler={this.handleOnChange.bind(this)}/>
        <MarkdownDisplay contents={this.state.input} />
      </div>
    </div>
  }
}
