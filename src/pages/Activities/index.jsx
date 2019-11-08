import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActivitiesAction } from '../../actions/activities'
import ActivityItem from '../../components/ActivityItem/index.jsx'
import * as S from './styles'

const Activities = ({ getActivities, list }) => {
  useEffect(() => {
    getActivities()
  }, [])

  return (
    <S.Activities>
      {list.map(item =>
        <ActivityItem key={item.id} activity={item} />
      )}
    </S.Activities>
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
