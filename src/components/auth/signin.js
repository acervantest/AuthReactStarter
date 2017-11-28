import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {

  renderField( field ) {
      return (
        <div className="form-group">
          <label>{ field.label }</label>
          <input className="form-control" type="text" { ...field.input }/>
        </div>
      );
  }

  handleFormSubmit( { email, password } ){
      console.log( email, password );
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <form onSubmit={ handleSubmit( this.handleFormSubmit.bind( this ) ) }>
        <Field label="Email" name="email" component={ this.renderField } />
        <Field label="Password" name="password" component={ this.renderField } />
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form >
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
