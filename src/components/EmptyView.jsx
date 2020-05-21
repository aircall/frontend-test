import React from 'react';
import PropTypes from 'prop-types';

import '../css/empty-view.css';

function EmptyView({ children }) {
    return (
        <div className="empty-view">
            {children}
        </div>
    )
}

EmptyView.propTypes = {
    children: PropTypes.node.isRequired,
};

export default EmptyView;