import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { getActivityDetailAction } from '../../actions/activities'
import ActivityDetail from '../../components/ActivityDetail/index.jsx'
import Button from '../../components/Button/index.jsx'
import * as S from './styles'

const Activity = ({ match, activity, getActivityDetail }) => {
  useEffect(() => {
    const { id } = match.params
    getActivityDetail(id)
  }, [])

  return (
    <S.PageWrapper>
      <Button as={Link} to='/'>Back</Button>

      {activity.id && <ActivityDetail />}
    </S.PageWrapper>
  )
}

Activity.propTypes = {
  getActivityDetail: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.string
    })
  })
}

const mstp = ({ activities: { detail } }) => ({
  activity: detail
})

const mdtp = dispatch => ({
  getActivityDetail: (id) => dispatch(getActivityDetailAction(id))
})

export default withRouter(connect(mstp, mdtp)(Activity))
