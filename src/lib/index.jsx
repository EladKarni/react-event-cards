import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './styles.css';

const Root = 'https://www.googleapis.com/calendar/v3/calendars/';
const currectDate = new Date().toISOString();

class CalendarCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  showCards() {
    return;
  }

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
        this.props.gAPI
        }@group.calendar.google.com/events?maxResults=${
        this.props.cards
        }&timeMin=${new Date().toISOString()}&singleEvents=true&orderBy=startTime&key=AIzaSyBzI4ZiGVQ-sSX8_R6uwEuz6o30fKogczI`
      )
      .then(res => {
        console.log(res.data.items);
        this.setState({ cards: res.data.items });
      });
  }

  render() {
    return (
      <div id="eventWrapper">
        <div id="EventCards">
          <div ref="card-wrapper">
            <ul>
              {this.state.cards.map(card => (
                <li key={card.id}>
                  <Card card={card} bColor={this.props.bColor} tColor={this.props.tColor} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarCards;
