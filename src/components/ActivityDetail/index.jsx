import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import format from 'date-fns/format'
import * as S from './styles'

/* eslint-disable camelcase */
const ActivityDetail = ({ activity: { from, created_at, duration, call_type, via, to } }) => {
  return (
    <S.Activity>
      <S.Header>
        <b>{from}</b>
        {to && <S.To>{to}</S.To>}

        {via && <em>Via {via}</em>}
        <em>{format(new Date(created_at), 'P p')}</em>
      </S.Header>

      <S.Details>
        {call_type === 'answered' && <b>Answered</b>}
        {call_type === 'missed' && <b>Missed</b>}

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
