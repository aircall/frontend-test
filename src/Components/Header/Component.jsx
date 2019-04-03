import React, { Component } from 'react'

import icoSettings from './../../assets/images/header/icon_filters.svg'
import './style.css'

class Header extends Component {
  handleChangeNav = currentNav => event => {
    event.stopPropagation()
    this.props.fetchActivities(currentNav)
  }

  archiveAll = async event => {
    event.stopPropagation()
    await this.props.archiveActivities(this.props.data.activities)
  }

  resetAll = async event => {
    event.stopPropagation()
    await this.props.resetActivities()
  }

  render() {
    const { currentNav } = this.props
    return (
      <div>
        <header className="headerMenu flex-center flex-layout-row">
          <div className="flex-center flex-1 align-left">
            <h1 className="title">Activity</h1>
          </div>

          <nav className="flex-1 align-right">
            <ol>
              <li className={currentNav === 'inbox' ? 'current' : ''} onClick={this.handleChangeNav('inbox')}>
                <button>Inbox</button>
              </li>
              <li className={currentNav === 'all' ? 'current' : ''}>
                <button onClick={this.handleChangeNav('all')}>All calls</button>
              </li>
              <li>
                <button className="icon">
                  <img alt="" src={icoSettings} />
                </button>
              </li>
            </ol>
          </nav>
        </header>

        <div className="subMenu">
          {currentNav === 'inbox' && this.props.data.activities.length > 0 && (
            <button className="button-success pure-button" onClick={this.archiveAll}>
              ARCHIVE ALL
            </button>
          )}
          {currentNav === 'inbox' && this.props.data.activities.length === 0 && (
            <button class="pure-button pure-button-disabled">
              <span role="img" aria-labelledby="like">
                👍
              </span>
              {' : '}
              All Archived !
            </button>
          )}
          {currentNav === 'all' && (
            <button className="button-secondary pure-button" onClick={this.resetAll}>
              RESET ALL
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Header
