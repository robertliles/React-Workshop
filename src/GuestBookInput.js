import React, { Component, PropTypes } from 'react';

export default class GuestBookInput extends Component {
  static propTypes = {
    submitText: PropTypes.string
  }

  static defaultProps = {
    submitText: 'hey'
  }

  state = {
    inputText: ''
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
        inputText: e.target.value
    });
  }

  onButtonClick = () => {
    this.props.onGuestBookEntry(this.state.inputText);
    this.setState({
        inputText: ''
    });
  }

  render() {
    const {
        submitText
    } = this.props;

    const {
        inputText
    } = this.state;

    return (
      <div>
        <input
          type="text"
          style={{
            border: '1px solid black'
          }}
          value={inputText}
          onChange={this.onChange}
          />
        <input
          type="button"
          value={submitText}
          onClick={this.onButtonClick}
        />
      </div>
    )
  }
}
