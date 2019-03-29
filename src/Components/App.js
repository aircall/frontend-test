import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {  BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'

// Actions (API)
import { fetchActivities } from './../Services/Activities/api';


// Components
import Header from './Header/Container';
import ListCalls from './ListCalls/Container';
import DetailsCall from './DetailsCall/Container';
import Footer from './Footer/Container';

class App extends Component {

  render() {
    const {openDetails, isLoading} = this.props
      return (
          <div className={`container ${(openDetails || isLoading) ? 'blur' : ''}`}>
              <Header  {...this.props} />
              <ListCalls {...this.props} />
              {openDetails && <DetailsCall {...this.props} />}
            <Footer />
          </div>
      );
    }
};


const mapStateToProps =  ({ data, isLoading, currentNav, openDetails }) => ({
  data,
  isLoading,
  openDetails,
  currentNav
})

const mapDispatchToProps = dispatch => ({
 fetchActivities: () => dispatch(fetchActivities()),
})

// DOC : WithRouter & Connect
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
