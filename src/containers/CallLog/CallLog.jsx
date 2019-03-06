import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  // add pertinent state here
  totalMarkets: store.markets.totalMarkets,
  totalCards: store.markets.totalCards
});

const mapDispatchToProps = dispatch => ({

});

class CallLog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CallLog);