import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <div className='habit-nav'>
        <span className='habit-nav-ico'>
          <i className='fas fa-leaf'></i>
        </span>
        <h2 className='habit-tit'>Habit Tracer</h2>
        <span className='habit-nav-count'>{this.props.habitCount}</span>
      </div>
    );
  }
}

export default Navbar;
