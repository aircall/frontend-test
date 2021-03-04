import React from 'react';
import { State } from '../../store/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import {
  ItemWrapper,
  FromLabel,
  ToLabel,
  Description,
  TimeLabel,
  InfoWrapper,
} from './styledComponents';
import { DirectionIcon } from '../../common/styledComponent';
import { getCallById } from '../../store/selectors';

interface OwnProps {
  id: string;
}

function mapStateToProps(state: State, { id }: OwnProps) {
  return {
    call: getCallById(state, id),
  };
}

type Props = OwnProps & ReturnType<typeof mapStateToProps>;

const CallItem = ({ call, id }: Props) => {
  const createAt = new Date(call.created_at);
  return (
    <Link to={`/${id}`}>
      <ItemWrapper>
        <DirectionIcon direction={call.direction} />
        <InfoWrapper>
          <FromLabel data-testid="from-label">{call.from || 'Unknown'}</FromLabel>
          <Description>
            to call on <ToLabel data-testid="to-label">{call.to || 'Unknown'}</ToLabel>
          </Description>
        </InfoWrapper>
        <TimeLabel>
          {format(createAt, 'hh:mm')} <span>{format(createAt, 'aa')}</span>
        </TimeLabel>
      </ItemWrapper>
    </Link>
  );
};

export default connect(mapStateToProps, null)(CallItem);
