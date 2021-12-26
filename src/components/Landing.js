import React from "react"
// import {Component} from 'react'

import restaraunts from "../sample-restaurants"

class Landing extends React.Component {
  state = {
    display: false,
    title: "",
    url: "",
  }

  displayList = () => {
    const { display } = this.state
    this.setState({
      display: !display,
    })
  }

  getTitle = (restaraunt) => {
    const { title, url } = restaraunt
    this.setState({
      title,
      url,
      display: false,
    })
  }

  render() {
    return (
      <div className="restaraunt_select">
        <div className="restaraunt_select_top">
          <div
            onClick={this.displayList}
            className="restaraunt_select_top-header font-effect-outline"
          >
            {this.state.title ? this.state.title : "Выбери ресторан"}
          </div>

          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>
        {this.state.display ? (
          <div className="restaraunt_select_bottom">
            <ul>
              {restaraunts.map((restaraunt) => {
                return (
                  <li
                    onClick={() => this.getTitle(restaraunt)}
                    key={restaraunt.id}
                  >
                    {restaraunt.title}
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}
        {this.state.title && !this.state.display ? (
          <button>Перейти в ресторан</button>
        ) : null}
      </div>
    )
  }
}

export default Landing
