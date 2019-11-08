import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import * as S from './styles'

const ActivityItem = ({ activity }) => {
  const callDate = new Date(activity.created_at)

  return (
    <S.Activity to={`/${activity.id}`}>
      <S.CallType type={activity.call_type} />

      <S.CallDetails>
        <S.Details>
          <b>{activity.from}</b>
          <span>{format(callDate, 'P')}</span>
        </S.Details>
        <S.Time>
          <span>{format(callDate, 'p')}</span>
        </S.Time>
      </S.CallDetails>
    </S.Activity>
  )
}

ActivityItem.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    via: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    is_archived: PropTypes.bool.isRequired,
    call_type: PropTypes.string.isRequired
  })
}

export default ActivityItem
