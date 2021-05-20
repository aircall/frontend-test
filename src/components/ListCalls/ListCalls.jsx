import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import { CallShape } from '../ModelPropTypes';

import CardCall from '../CardCall';

import { insertDateSeparator } from './utils';

import '../../css/activity-feed.css';

function ListCalls({ calls }) {
    const sortedCallsByCreatedAt = calls.sort((a, b) =>
        dayjs(a.created_at).isBefore(b.created_at)
    );

    return (
        <>
            {sortedCallsByCreatedAt.map((call, index) => {
                const previousCall = index > 0 ? calls[index - 1] : null;

                return [
                    insertDateSeparator(call, previousCall),
                    <CardCall key={call.id} call={call} />,
                ];
            })}
        </>
    );
}

ListCalls.propTypes = {
    calls: PropTypes.arrayOf(CallShape).isRequired,
};

export default ListCalls;
