import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getActivitiesAction } from '../../actions/activities'

const Activities = ({ getActivities }) => {
  useEffect(() => {
    getActivities()
  }, [])

  return (
    <div>
      Activities
    </div>
  )
}

const mdtp = dispatch => ({
  getActivities: () => dispatch(getActivitiesAction)
})

export default connect(null, mdtp)(Activities)
