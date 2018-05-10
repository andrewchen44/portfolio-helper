import React from 'react';
import updateActual from '../../actions/actualPortfolioActions';

class PortfolioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const input = e.target.value.split('');
    let filtered = '';
    for (let i = 0; i < input.length; i += 1) {
      const character = input[i];
      if ((character <= 9 && character >= 0) || character === '.') {
        filtered += character;
      }
    }
    this.setState({
      value: filtered,
    });
    this.props.dispatch(updateActual(this.props.index, filtered));
  }
  render() {
    return (
      <input className='actual_input' value={this.state.value} type='number' onChange={this.handleChange} />
    );
  }
}

export default PortfolioInput;
