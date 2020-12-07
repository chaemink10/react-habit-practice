import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import AddInput from './components/addInput';
import ClearButton from './components/clearButton';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // const habits = [...this.state.habits]; //배열복사
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });

    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    // const habits = [...this.state.habits]; //배열복사
    // const index = habits.indexOf(habit);
    // const countMinus = habits[index].count - 1;
    // habits[index].count = countMinus < 0 ? 0 : countMinus;

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count - 1 < 0 ? 0 : habit.count - 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((value) => habit.id !== value.id);
    this.setState({ habits });
  };

  handleInsert = (insertNm) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: insertNm, count: 0 },
    ]; //배열복사
    this.setState({ habits });

    // const insertObj = {
    //   id: habits.length + 1,
    //   name: insertNm,
    //   count: 0,
    // };
    // habits.push(insertObj);
  };

  handleReset = () => {
    //const habits = [...this.state.habits]; //배열복사
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      } else {
        return item;
      }
    });

    console.log(habits);
    console.log(this.state.habits);

    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          habitCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <AddInput onInsert={this.handleInsert} />
        <Habits
          habit={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <ClearButton habit={this.state.habits} onClear={this.handleReset} />
      </div>
    );
  }
}

export default App;
