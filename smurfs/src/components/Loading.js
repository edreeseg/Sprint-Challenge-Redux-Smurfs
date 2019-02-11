import React from "react";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Loading"
    };
  }
  componentDidMount() {
    this.loadAnimation = setInterval(() => {
      this.setState(prevState => {
        return {
          text: prevState.text.includes("...")
            ? "Loading"
            : prevState.text + "."
        };
      });
    }, 250);
  }
  componentWillUnmount() {
    clearInterval(this.loadAnimation);
  }
  render() {
    return <h2 className="loading">{this.state.text}</h2>;
  }
}

export default Loading;