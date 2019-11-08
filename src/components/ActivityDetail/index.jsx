import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import format from 'date-fns/format'
import ActivityStatusIcon from '../ActivityStatusIcon/index.jsx'
import * as S from './styles'

/* eslint-disable camelcase */
const ActivityDetail = ({ activity: { direction, from, created_at, duration, call_type, via, to } }) => {
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
    </S.Activity>
  )
}

ActivityDetail.propTypes = {
  activity: PropTypes.object.isRequired
}

const mstp = ({ activities: { detail } }) => ({ activity: detail })

export default connect(mstp)(ActivityDetail)
