// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Store
import { callsFecthing } from '../../store/reducers.js'
import { updateCalls } from '../../store/actions/actions.js'
// Scripts
import { fetchCalls } from '../../script/call_fetcher.js'

const mapStateToProps = (state) => {
  return {
    callsFecthing: callsFecthing(state)
  }
}

const mapDispatchToProps = {
  updateCalls
}

/**
 * Renderless component to fetch a list of calls
 * when the corresponding Store property requires it.
 * 
 * @class RLCallsFetcher
 * @extends React.Component
 */
class RLCallsFetcher extends React.Component {
  componentDidUpdate(prevProps) {
    const { callsFecthing, updateCalls } = this.props

    if (callsFecthing && !prevProps.callsFecthing) {  
      fetchCalls()
        .then(calls => updateCalls(calls))
    }
  }

  render() {
    return null // Simply return null, nothing to render here
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RLCallsFetcher);
