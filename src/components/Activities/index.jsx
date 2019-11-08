import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActivitiesAction } from '../../actions/activities'

const Activities = ({ getActivities, list }) => {
  useEffect(() => {
    getActivities()
  }, [])

  return (
    <div>
      Activities
      {list.map(item => <div key={item.id}>#{item.id} {item.from}</div>)}
    </div>
  )
}

Activities.propTypes = {
  getActivities: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}

const mdtp = dispatch => ({
  getActivities: () => dispatch(getActivitiesAction)
})

const mstp = ({ activities: { list } }) => ({
  list
})

export default connect(mstp, mdtp)(Activities)
