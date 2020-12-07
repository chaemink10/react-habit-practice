import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    const habitProps = this.props.habit;

    return (
      <ul>
        {habitProps.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
