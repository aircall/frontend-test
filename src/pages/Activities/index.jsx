import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActivitiesAction, resetArchivesAction } from '../../actions/activities'
import ActivityItem from '../../components/ActivityItem/index.jsx'
import Button from '../../components/Button/index.jsx'
import * as S from './styles'

const Activities = ({ list, getActivities, resetArchives }) => {
  const [showArchives, setShowArchives] = useState(true)

  const handleResetArchivesClick = () => {
    resetArchives()
  }

  useEffect(() => {
    getActivities()
  }, [])

  const filteredList = !showArchives ? list.filter(item => !item.is_archived) : list

  return (
    <S.PageWrapper>
      <S.Header>
        <Button onClick={() => setShowArchives(!showArchives)}>
          {showArchives ? 'Hide' : 'Show'} archived calls
        </Button>
        <Button onClick={handleResetArchivesClick}>
          Reset archives
        </Button>
      </S.Header>

      <S.Activities>
        {filteredList.map(item =>
          <ActivityItem key={item.id} activity={item} />
        )}
      </S.Activities>
    </S.PageWrapper>
  )
}

Activities.propTypes = {
  list: PropTypes.array.isRequired,
  getActivities: PropTypes.func.isRequired,
  resetArchives: PropTypes.func.isRequired
}

const mdtp = dispatch => ({
  getActivities: () => dispatch(getActivitiesAction),
  resetArchives: () => dispatch(resetArchivesAction)
})

const mstp = ({ activities: { list } }) => ({
  list
})

export default connect(mstp, mdtp)(Activities)
