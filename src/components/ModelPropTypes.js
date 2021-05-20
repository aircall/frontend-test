import PropTypes from 'prop-types';

const CallShape = PropTypes.shape({
    call_type: PropTypes.string,
    created_at: PropTypes.string,
    direction: PropTypes.string,
    duration: PropTypes.string,
    from: PropTypes.string,
    id: PropTypes.number.isRequired,
    is_archived: PropTypes.boolean,
    to: PropTypes.string,
    via: PropTypes.string,
});

export { CallShape };
