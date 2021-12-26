import React from "react"
// import {Component} from 'react'

import restaraunts from "../sample-restaurants"

class Landing extends React.Component {
  render() {
    return (
      <div className="restaraunt_select">
        <div className="restaraunt_select_top">
          <div className="restaraunt_select_top-header font-effect-outline">
            Выбери ресторан
          </div>

          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>
        <div className="restaraunt_select_bottom">
          <ul>
            {restaraunts.map((restaraunt) => {
              return <li key={restaraunt.id}>{restaraunt.title}</li>
            })}
          </ul>
        </div>
        <button>Перейти в ресторан</button>
      </div>
    )
  }
}

export default Landing
