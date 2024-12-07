import React, { Component } from "react";
import { Button } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Ahmad Abu Aminu",
        bio: "Undisclosed",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5SPclS6aHJHZVoeV1mbQxnqgNWCes4mNig&s",
        profession: "DevOps",
      },
      shows: true,
      mountedTime: new Date(), // Stores the time the component was mounted
      timeSinceMounted: 0, // Stores the time interval since mount
    };
  }

  // Lifecycle method to track time interval
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeSinceMounted: Math.floor(
          (new Date() - this.state.mountedTime) / 1000
        ),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Clean up the timer when the component is unmounted
  }

  // Toggle the `shows` state
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="flex flex-col justify-center items-center mt-40 gap-10">
        <h1 className="text-5xl text-red-300">{person.bio}</h1>

        {/* Conditional Rendering Based on `shows` */}
        {shows ? (
          <div className="text-center">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="rounded-lg w-40"
            />
            <h2 className="text-2xl mt-4">{person.fullName}</h2>
            <p className="text-xl">{person.profession}</p>
          </div>
        ) : (
          <h1>{person.fullName}</h1>
        )}

        {/* Button to Toggle Show */}
        <Button type="dashed" danger onClick={this.toggleShow}>
          Toggle Profile
        </Button>

        {/* Time Interval */}
        <p className="mt-4 text-gray-500">
          Component has been mounted for {timeSinceMounted} seconds.
        </p>
      </div>
    );
  }
}

export default App;
