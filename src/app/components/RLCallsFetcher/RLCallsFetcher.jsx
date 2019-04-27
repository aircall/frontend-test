// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Modules
import { callsFecthing } from '../../store/reducers.js'
import { updateCalls } from '../../store/actions/actions.js'
import { fetchCalls } from '../../script/call_fetcher.js'


const mapStateToProps = (state) => {
  return {
    callsFecthing: callsFecthing(state)
  }
}

const mapDispatchToProps = {
  updateCalls
}

class RLCallsFetcher extends React.Component {
  componentDidUpdate(prevProps) {
    const { callsFecthing, updateCalls } = this.props

    if (callsFecthing && !prevProps.callsFecthing) {  
      fetchCalls()
        .then(calls => {
          console.log(calls);
          updateCalls(calls)
        })
    }
  }

  render() {
    return null
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RLCallsFetcher);
