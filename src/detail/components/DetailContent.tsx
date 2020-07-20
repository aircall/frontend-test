import React, { useState } from 'react';
import { format } from 'date-fns';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import avatar from '../../asset/user.svg';
import {
  UserWrapper,
  UserName,
  UserImg,
  DetailWrapper,
  ArrowWrapper,
  InfoWrapper,
  CallTypeIcon,
  ArchivedLabel,
  Button,
  BackLink,
  FlexContainer,
} from './styledComponents';
import { Call } from '../../@types/call';
import { DirectionIcon } from '../../common/styledComponent';
import { archiveCallReuqest } from '../action';

function mapDispatchtoProps(dispatch: Dispatch) {
  return bindActionCreators({ archiveCallReuqest }, dispatch);
}

type Props = ReturnType<typeof mapDispatchtoProps> & {
  call: Call
}

const DetailContent = ({ call, archiveCallReuqest }: Props) => {
  const [isSubmiting, setIsSubmmiting] = useState(false);
  const [hasError, displayError] = useState(false);

  const date = new Date(call.created_at);
  const duration =
    call.duration < 60 ? `${call.duration} sec` : `${Math.floor(call.duration / 60)} min`;
  const onArchive = () => {
    setIsSubmmiting(true);
    archiveCallReuqest(
      call.id,
      () => {
        setIsSubmmiting(false);
      },
      () => {
        displayError(true);
      },
    );
  };
  return (
    <>
      <BackLink to="/"> Back to feed</BackLink>
      <DetailWrapper>
        <UserWrapper>
          <UserImg src={avatar} alt="avatar" />
          <UserName>
            From: <strong>{call.from}</strong>
          </UserName>
        </UserWrapper>
        <ArrowWrapper>
          Via : <strong>{call.via}</strong>
        </ArrowWrapper>
        <UserWrapper>
          <UserImg src={avatar} alt="avatar" />
          <UserName>
            To: <strong>{call.to}</strong>
          </UserName>
        </UserWrapper>
        <InfoWrapper>
          <p>
            {format(date, 'dd MMMM yyyy hh:mm')} ({duration})
          </p>
          <FlexContainer>
            <DirectionIcon direction={call.direction} />
            <p>
              {call.direction === 'inbound' ? 'Incoming call' : 'Outgoing call'}
            </p>
          </FlexContainer>
          <FlexContainer>
            <CallTypeIcon type={call.call_type} />
            <p>{`${call.call_type}`}</p>
          </FlexContainer>
        </InfoWrapper>

        {call.is_archived ? (
          <ArchivedLabel>Archived</ArchivedLabel>
        ) : (
            <Button disabled={isSubmiting} onClick={onArchive}>
              {isSubmiting ? 'Archiving...' : 'Archive'}
            </Button>
          )}
        {hasError && <label>Fail to archive, please try again later</label>}
      </DetailWrapper>
    </>
  );
};

export default connect(null, mapDispatchtoProps)(DetailContent);
