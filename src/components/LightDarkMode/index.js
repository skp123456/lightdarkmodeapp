import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'Dark Mode' : 'Light Mode'
  }

  getTitleText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'title-2' : 'title'
  }

  getBgColor = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'bg-container-2' : 'bg-container'
  }

  getButonColor = () => {
    const {isDarkMode} = this.state

    return isDarkMode ? 'button-2' : 'button'
  }

  render() {
    const buttonText = this.getButtonText()
    const bgColor = this.getBgColor()
    const getTitleText = this.getTitleText()
    const getButtonColor = this.getButonColor()
    return (
      <div className={bgColor}>
        <div className="content-container">
          <h1 className={getTitleText}>Click to Change Mode</h1>
          <button
            className={getButtonColor}
            type="button"
            onClick={this.changeMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
