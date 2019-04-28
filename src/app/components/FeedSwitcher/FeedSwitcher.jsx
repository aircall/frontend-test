// Libraries
import React from 'react';
import { connect } from 'react-redux'
// Styles
import './feed-switcher.css'
// Store
import { selectedFeed } from '../../store/reducers.js'
import { selectFeed } from '../../store/actions/actions.js'

// Store connection
const mapStateToProps = (state) => {
  return {
    selectedFeed: selectedFeed(state)
  }
}

const mapDispatchToProps = {
  selectFeed
}

/**
 * Entrypoint React component for the app
 */
const FeedSwitcher = ({
  selectedFeed,
  selectFeed
}) => {
  return (
    <div className="feed-switcher">
      <p className={`feed-selector ${selectedFeed === 'active' ? 'feed-selected': ''}`} onClick={() => selectFeed('active')}>Active</p>
      <p className={`feed-selector ${selectedFeed === 'archived' ? 'feed-selected': ''}`} onClick={() => selectFeed('archived')}>Archived</p>
      <p className={`feed-selector ${selectedFeed === 'all' ? 'feed-selected': ''}`} onClick={() => selectFeed('all')}>All</p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedSwitcher);
