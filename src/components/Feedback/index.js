import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isEmojiClicked: true}

  setFeedBackSelector = () => {
    this.setState(prevState => ({isEmojiClicked: prevState.false}))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="outter-container">
        <div className="inner-container">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="list-items">
            {emojis.map(emoji => (
              <li
                className="list-elements"
                key={emoji.id}
                onClick={this.setFeedBackSelector}
              >
                <img
                  src={emoji.imageUrl}
                  alt="imageUrl"
                  className="imgs"
                  alt="name"
                />
                {emoji.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderSuccessfullyEmojiContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="outter-container">
        <div className="inner">
          <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
          <h1>Thank You</h1>
          <p>
            We’ll use your feedback to improve our customer support performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div>
        {isEmojiClicked
          ? this.renderEmojiContainer()
          : this.renderSuccessfullyEmojiContainer()}
      </div>
    )
  }
}
export default Home
