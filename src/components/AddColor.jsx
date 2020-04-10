import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';

class AddColor extends Component {
  state = {
    value: '',
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { push } = this.props.history;
    this.props.handleColor((prevState) => [this.state.value, ...prevState]);
    push('/colors');
  };
  render() {
    return (
      <Fragment>
        <NavBar />
        <form
          className='form-inline text-center form'
          onSubmit={this.handleSubmit}
        >
          <input
            className='form-control'
            type='text'
            name='title'
            required
            placeholder='Add Color...'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            className='btn btn-primary mx-2 '
            type='submit'
            value='Submit'
          />
        </form>
      </Fragment>
    );
  }
}

export default withRouter(AddColor);
