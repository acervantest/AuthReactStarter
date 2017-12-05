import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  renderField( field ) {
      return (
        <div className="form-group">
          <label>{ field.label }</label>
          <input className="form-control" type={ field.type } { ...field.input }/>
        </div>
      );
  }

  handleFormSubmit( { username, password } ){
      console.log( username, password );
      this.props.signinUser( { username, password } );
  }

  renderAlert() {
    if( this.props.errorMessage ){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <form onSubmit={ handleSubmit( this.handleFormSubmit.bind( this ) ) }>
        <Field label="Username" name="username" type="text" component={ this.renderField } />
        <Field label="Password" name="password" type="password" component={ this.renderField } />
          { this.renderAlert() }
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form >
    );
  }
}

function mapStateToProps( state ){
  return { errorMessage: state.auth.error };
}

Signin = reduxForm({
  form: 'signin',
  fields: [ 'email', 'password' ]
})(Signin);
export default connect(mapStateToProps, actions)(Signin);
