import { connect } from 'react-redux'
import {
  fetchActivities,
  archiveActivities,
  resetActivities
} from '../../Services/Activities/api'

import Header from './Component.jsx'

const mapStateToProps = ({ data, currentNav, isLoading }) => ({
  data,
  isLoading,
  currentNav
})

const mapDispatchToProps = dispatch => ({
  fetchActivities: currentNav => dispatch(fetchActivities(currentNav)),
  archiveActivities: activities => dispatch(archiveActivities(activities)),
  resetActivities: () => dispatch(resetActivities())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
