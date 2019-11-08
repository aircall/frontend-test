import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActivitiesAction } from '../../actions/activities'
import ActivityItem from '../../components/ActivityItem/index.jsx'
import Button from '../../components/Button/index.jsx'
import * as S from './styles'

const Activities = ({ getActivities, list }) => {
  const [showArchives, setShowArchives] = useState(true)

  useEffect(() => {
    getActivities()
  }, [])

  const filteredList = !showArchives ? list.filter(item => !item.is_archived) : list

  return (
    <S.PageWrapper>
      <Button onClick={() => setShowArchives(!showArchives)}>
        {showArchives ? 'Hide' : 'Show'} archived calls
      </Button>

      <S.Activities>
        {filteredList.map(item =>
          <ActivityItem key={item.id} activity={item} />
        )}
      </S.Activities>
    </S.PageWrapper>
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
