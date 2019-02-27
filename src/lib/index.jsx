import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'
import './styles.css'

const Root = 'https://www.googleapis.com/calendar/v3/calendars/'
const currectDate = new Date().toISOString()

class CalendarCards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          this.props.calID
        }/events?maxResults=${
          this.props.cards
        }&timeMin=${new Date().toISOString()}&singleEvents=true&orderBy=startTime&key=${
          this.props.gAPI
        }`
      )
      .then(res => {
        console.log(res.data.items)
        this.setState({ cards: res.data.items })
      })
  }

  render() {
    return (
      <div id="eventWrapper">
        <div id="EventCards">
          <div ref="card-wrapper">
            <ul style={{ listStyle: 'none' }}>
              {this.state.cards.map(card => (
                <li key={card.id}>
                  <Card
                    card={card}
                    bColor={this.props.bColor}
                    tColor={this.props.tColor}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarCards
