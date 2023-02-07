import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <p>
        {this.props.timeZone} :
        {this.state.date.toLocaleString("en-GB", this.props)}
      </p>
    );
  }
}
