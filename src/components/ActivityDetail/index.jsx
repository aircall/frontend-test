import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import format from 'date-fns/format'
import { archiveActivityAction } from '../../actions/activities'
import ActivityStatusIcon from '../ActivityStatusIcon/index.jsx'
import * as S from './styles'

/* eslint-disable camelcase */
const ActivityDetail = ({ activity: { id, direction, from, created_at, duration, call_type, via, to, is_archived }, archiveActivity }) => {
  const handleArchiveClick = () => {
    archiveActivity(id)
  }

  return (
    <S.Activity direction={direction}>
      <S.Header>
        <S.Status>
          <ActivityStatusIcon status={call_type} />
          <b>{call_type}</b>
        </S.Status>

        <b>{direction}</b>
      </S.Header>

      <S.Details>
        <b>{from}</b>
        {to && <S.To>{to}</S.To>}

        {via && <em>Via {via}</em>}
        <em>{format(new Date(created_at), 'P p')}</em>
        <em>{duration} seconds</em>

      </S.Details>

      <S.Archive>
        {!is_archived &&
          <button onClick={handleArchiveClick}>Archive</button>}

        {is_archived && <b>ARCHIVED</b>}
      </S.Archive>
    </S.Activity>
  )
}

ActivityDetail.propTypes = {
  activity: PropTypes.object.isRequired,
  archiveActivity: PropTypes.func.isRequired
}

const mstp = ({ activities: { detail } }) => ({ activity: detail })

const mdtp = (dispatch) => ({
  archiveActivity: (id) => dispatch(archiveActivityAction(id))
})

export default connect(mstp, mdtp)(ActivityDetail)
