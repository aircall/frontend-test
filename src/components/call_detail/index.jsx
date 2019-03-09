import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter, Redirect } from "react-router-dom"
import useFetch from 'utils/use_fetch'
import postData from 'utils/post_data'
import Loading from 'ui_elements/loading'
import format from 'date-fns/format'
import { basePath } from 'paths'
import { didMissCall, parseDuration } from 'utils/helpers'
import CallLogIcon from '../call_log/call_log_icon'
import StyledCallDetail from './styled/call_detail'

const IconContainer = styled.div`
  display: flex;
  font-size: 20px;
  flex: 1;
  margin: 8px 0;
`

const CallDetail = ({ history, match: { params: { id } } }) => {
  if (!id) return <Redirect to={basePath} />

  const url = `https://aircall-job.herokuapp.com/activities/${id}`
  const { data, loading } = useFetch({ url })

  if (loading || !data) return <Loading />

  const actionMessage = didMissCall(data.call_type) ? "tried to call on" : "called on";
  const callTime = `${format(data.created_at, 'MMMM DD, YYYY @ HH:mm A')} for ${parseDuration(data.duration)}`
  
  const handleArchive = () => {
    postData(url, { "is_archived": true })
      .then(() => {
        history.push('/')
      })
  }

  return (
    <StyledCallDetail>
      <StyledCallDetail.From>{data.from}</StyledCallDetail.From>
      {data.to && (
        <StyledCallDetail.To>{actionMessage} {data.to}</StyledCallDetail.To>
      )}
      <StyledCallDetail.Via>via {data.via}</StyledCallDetail.Via>
      <IconContainer>
        <CallLogIcon callType={data.call_type} />
      </IconContainer>
      <StyledCallDetail.Tag>
        {data.direction}
      </StyledCallDetail.Tag>
      <StyledCallDetail.CallTime>
        {callTime}
      </StyledCallDetail.CallTime>
      {!data.is_archived && (
        <StyledCallDetail.ArchiveButton onClick={handleArchive}>
          Archive
        </StyledCallDetail.ArchiveButton>
      )}
     
    </StyledCallDetail>
  )
}

CallDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    })
  }).isRequired, // from react-router
}

export default withRouter(CallDetail)
