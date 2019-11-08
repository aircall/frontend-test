import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import * as S from './styles'

export const ActivityItem = ({ activity }) => {
  const callDate = new Date(activity.created_at)

  return (
    <S.Activity>
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
    id: PropTypes.number,
    created_at: PropTypes.string,
    direction: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    via: PropTypes.string,
    duration: PropTypes.string,
    is_archived: PropTypes.bool,
    call_type: PropTypes.string
  })
}
