import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Actions (API)
import { fetchActivities } from '../Services/Activities/api'

// Components
import Header from './Header/Container.jsx'
import ListCalls from './ListCalls/Container.jsx'
import DetailsCall from './DetailsCall/Container.jsx'
import Footer from './Footer/Container.jsx'

class App extends Component {
  render() {
    const { openDetails, isLoading } = this.props
    return (
      <div className={`container ${openDetails || isLoading ? 'blur' : ''}`}>
        <Header {...this.props} />
        <ListCalls {...this.props} />
        {openDetails && <DetailsCall {...this.props} />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({ data, isLoading, currentNav, openDetails }) => ({
  data,
  isLoading,
  openDetails,
  currentNav
})

const mapDispatchToProps = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities())
})

// DOC : WithRouter & Connect
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
