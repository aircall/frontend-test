import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import * as S from './styles'

/* eslint-disable camelcase */
const ActivityItem = ({ activity: { id, direction, from, created_at, is_archived } }) => {
  const callDate = new Date(created_at)

  return (
    <S.Activity to={`/${id}`}>
      <S.CallDirection direction={direction} />

      <S.CallDetails>
        <S.Details>
          <b>{from}</b>
          <span>{format(callDate, 'P')}</span>
        </S.Details>
        <S.Time>
          <span>{format(callDate, 'p')}</span>
          {is_archived && <span>Archived</span>}
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
