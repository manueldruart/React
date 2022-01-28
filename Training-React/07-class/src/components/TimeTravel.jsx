import React, { Component } from 'react';

class TimeTravel extends Component {
  render() {
    const { actionOnClick } = this.props;
    return (
      <button
        type="button"
        className="bg-blue-700 text-white px-8 m-6 transition rounded hover:bg-blue-400"
        onClick={() => actionOnClick('Vendredi')}>
        Update Day
      </button>
    );
  }
}

export default TimeTravel;
