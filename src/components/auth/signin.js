import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  renderField( field ) {
      return (
        <div className="form-group">
          <label>{ field.label }</label>
          <input className="form-control" type="text" { ...field.input }/>
        </div>
      );
  }

  handleFormSubmit( { username, password } ){
      console.log( username, password );
      this.props.signinUser( { username, password } );
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <form onSubmit={ handleSubmit( this.handleFormSubmit.bind( this ) ) }>
        <Field label="Username" name="username" component={ this.renderField } />
        <Field label="Password" name="password" component={ this.renderField } />
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form >
    );
  }
}

Signin = reduxForm({
  form: 'signin',
  fields: [ 'email', 'password' ]
})(Signin);
export default connect(null, actions)(Signin);
