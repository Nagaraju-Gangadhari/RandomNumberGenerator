// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}
  Generate = () => {
    this.setState(prevState => {
      return {num: (prevState.num = Math.ceil(Math.random() * 100))}
    })
  }

  render() {
    const {num} = this.state
    return (
      <div className="bgcontainer">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.Generate}>
            Generate
          </button>
          <p className="paragraph2">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
