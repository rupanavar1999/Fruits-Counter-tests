// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoincrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaincrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="cardContainer">
          <div>
            <h1 className="heading">
              Bob ate <span className="count">{mango}</span> mangoes{' '}
              <span className="count">{banana}</span> bananas
            </h1>
            <div className="imgContainer">
              <div>
                <img
                  className="mangoImg"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mangoImg"
                />
                <button
                  onClick={this.mangoincrement}
                  className="button"
                  type="mouse"
                >
                  Eat Mango
                </button>
              </div>
              <div>
                <img
                  className="bananaImg"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                  alt="bananaImg"
                />
                <button
                  onClick={this.bananaincrement}
                  className="button"
                  type="mouse"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
