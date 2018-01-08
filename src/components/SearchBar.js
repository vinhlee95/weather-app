import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = { term : '' };
   }

   handleChange(e) {
      this.setState({ term: e.target.value });
   }

   handleSubmit(e) {
      e.preventDefault();
      //call fetchWeather when users hit Enter(submit the form)
      this.props.fetchWeather(this.state.term);
      this.setState( {term: ''});
   }

   render() {
      return(
         <form className = "input-group" onSubmit = {this.handleSubmit.bind(this)} >
            <input 
               placeholder = "Enter your city"
               className = 'form-control'
               value = {this.state.term}
               onChange = {this.handleChange.bind(this)}
            />
            <span className = "input-group-button">
               <button type = "submit" className = "btn">Submit</button>
            </span>
         </form>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);