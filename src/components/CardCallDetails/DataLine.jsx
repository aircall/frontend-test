import React from 'react';
import PropTypes from 'prop-types';

function DataLine({ label, value }) {
    return (
        <div className="data-line flex-row space-between">
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </div>
    );
}

DataLine.propTypes = {
    label: PropTypes.string,
    value: PropTypes.node,
};

export default DataLine;
