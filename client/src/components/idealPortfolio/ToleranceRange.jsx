import React from 'react';
import updateIdeal from '../../actions/idealPortfolioActions'

class ToleranceRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newVal = e.target.value;
    if (newVal >= 1 && newVal <= 10) {
      this.setState({
        value: newVal,
      });
      this.props.dispatch(updateIdeal(newVal - 1));
    }

  }

  render() {
    return (
      <div className='tolerance_form'> 
        <div className='header'>
          <div>Please Enter Your Risk Tolerance Level</div>
          <div>(1 for risk adverse and 10 for risk tolerant)</div>
          <input className='tolerance_input' type='number' min='1' max='10' value={this.state.value} onChange={this.handleChange} />

        </div>
      </div>
    );
  }
}

export default ToleranceRange;