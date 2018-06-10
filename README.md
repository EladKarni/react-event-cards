# React Event Cards

This is a simple component that let's you dynamically fetch events from any public google calendar and display each event as it's own pre-styled event card containing the information from that event. At the button of each card is a google maps (if the event has a location), which will animate to reveal the full map if hovered over or tapped on (mobile supported).

## Prerequisites

In order to get started and use `React-Event-Cards`, you will need a few things:
* A Public Google Calendar & It's `ID`
* API key/s for Google Maps and Google Calendar

## Getting started

To get React-Event-Cards working in your projects, follow these easy steps:

1. Install the component with `npm i --save react-event-cards`
2. Import the component
3. ?
4. Profit?!

This is how you call the component without any modifications.

```javascript
 <CalendarCards
        calID="YOUR CALENDAR ID HERE"
        gAPI="YOUR GOOGLE API KEY HERE"
        cards="1" />
```
Please note that you need to specify how many cards you want to display or none will show.

### Component Options

Currently, the `CalenderCards` component can only take 2 additional arguments. One for the background color and another for the text color.

We address the background color with `bColor` and text color with `tColor`.

```javascript
 <CalendarCards
        calID="YOUR CALENDAR ID HERE"
        gAPI="YOUR GOOGLE API KEY HERE"
        bColor="red"
        tColor="white"
        cards="1" />
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Elad Karni** - *Initial work* - [EladKarni](https://github.com/EladKarni)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
