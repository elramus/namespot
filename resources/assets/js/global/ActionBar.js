import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AbEditRoom from '../scenes/Room/containers/AbEditRoom';
import AbEditTable from '../scenes/Room/containers/AbEditTable';
import AbDeleteTable from '../scenes/Room/containers/AbDeleteTable';
import AbOfferingOverview from '../scenes/Room/containers/AbOfferingOverview';

export default class ActionBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let actionBarContents;
    const task = this.props.task;
    switch (task) {
      case 'edit-room':
        actionBarContents = <AbEditRoom />;
        break;
      case 'edit-table':
        actionBarContents = <AbEditTable />;
        break;
      case 'delete-table':
        actionBarContents = <AbDeleteTable/>;
        break;
      case 'offering-overview':
        actionBarContents = <AbOfferingOverview/>;
        break;
      default:
        actionBarContents = null;
    }
    return (
      <div className='action-bar-container'>
        <Route path={`/room/:roomID/`} render={() => actionBarContents} />
        <Route path={`/offering/:offeringID/`} render={() => actionBarContents} />
      </div>
    )
  }
}