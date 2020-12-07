import React, { PureComponent } from 'react';

class ClearButton extends PureComponent {
  onReset = () => {
    this.props.onClear();
  };

  render() {
    return (
      <>
        <button type='button' className='reset_btn' onClick={this.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default ClearButton;
