import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { getActivityDetailAction } from '../../actions/activities'

const ActivityDetail = ({ match, getActivityDetail, activity }) => {
  useEffect(() => {
    const { id } = match.params
    getActivityDetail(id)
  }, [])

  return (
    <div>
      <Link to='/'>Back</Link>

      <b>{activity.from}</b>
    </div>
  )
}

ActivityDetail.propTypes = {
  getActivityDetail: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.string
    })
  })
}

const mstp = ({ activities: { detail } }) => ({ activity: detail })

const mdtp = dispatch => ({
  getActivityDetail: (id) => dispatch(getActivityDetailAction(id))
})

export default withRouter(connect(mstp, mdtp)(ActivityDetail))
