import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styled/call'

const CallLogIcon = ({ callType, className }) => {
  const iconMap = {
    'answered': 'phone',
    'missed': 'phone-slash',
    'voicemail': 'envelope'
  }
  const icon = iconMap[callType]

  return <Icon icon={icon} className={className} />
}

CallLogIcon.propTypes = {
  callType: PropTypes.string.isRequired,
  className: PropTypes.string,
}

CallLogIcon.defaultProps = {
  className: '',
}

export default CallLogIcon
