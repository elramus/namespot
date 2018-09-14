import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import _throttle from 'lodash/throttle'
import EditableText from '../../global/containers/EditableText'
import AbDivider from '../../global/AbDivider'
import helpers from '../../bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class AbRoomOverview extends Component {
  constructor(props) {
    super(props)
    this.throttledSeatSizeChange = _throttle((e) => {
      this.props.requestRoomUpdate(this.props.currentRoom.id, 'seat_size', e.target.value)
    }, 750)
  }

  state = {
    seatSize: this.props.currentRoom.seat_size || ''
  }

  onSeatSizeChange = (e) => {
    e.persist()
    this.setState({ seatSize: e.target.value })
    this.throttledSeatSizeChange(e)
  }

  handleAddNewClick() {
    this.props.newTable()
    this.props.setTask('edit-table')
    this.props.setPointSelection('start')
  }

  handleDeleteClick() {
    this.props.setTask('delete-table')
  }

  handleRoomChangeClick() {
    this.props.setModal('change-room',true)
  }

  handleContinueSeatingClick() {
    this.props.history.push(`/offering/${this.props.currentOffering.id}`)
    this.props.setTask('offering-overview')
    this.props.setView('assign-seats')
  }

  handleSaveRoomName(name, type) {
    this.props.requestRoomUpdate(this.props.currentRoom.id, type, name)
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentRoom.seat_size !== prevProps.currentRoom.seat_size) {
      this.setState({ seatSize: this.props.currentRoom.seat_size })
    }
  }

  render() {
    const { seatSize } = this.state
    const { currentRoom, seatCount } = this.props

    return (
      <div className='action-bar action-bar-room-overview'>

        <div className="descriptions">
          <div className="flex-container pull-top">
            <h6>Name</h6>
            <EditableText
              text={currentRoom.name ? currentRoom.name : 'Click to add'}
              save={(name) => this.handleSaveRoomName(name, 'name')}
              validator='unique-room-name'
            />
            {/* { currentRoom.type === 'template' ? (
              <div>
                <h6>AIS Name</h6>
                <EditableText
                  text={currentRoom.db_match_name ? currentRoom.db_match_name : 'Click to add'}
                  save={(name) => this.handleSaveRoomName(name, 'db_match_name')}
                  validator='unique-room-db-name'
                />
              </div>
            ) : false } */}
            <h6>Total Room Capacity</h6>
            <p>{seatCount}</p>
          </div>

          {/* <div className="flex-container pull-top">
            <h6>Total Room Capacity</h6>
            <p>{seatCount}</p>
          </div> */}

        </div>

        <div className="controls">

          <div className="flex-container">
            <a href="javascript:void(0)" onClick={() => this.handleAddNewClick()}>
              <button className='big-button'>
                <FontAwesomeIcon icon={['far', 'plus-circle']} />
                <p>Add<br />Section</p>
              </button>
            </a>
          </div>

          <div className="flex-container">
            <a href="javascript:void(0)" onClick={ () => this.handleDeleteClick() }>
              <button className='big-button'>
                <FontAwesomeIcon icon={['far', 'minus-circle']} />
                <p>Remove<br />Section</p>
              </button>
            </a>
          </div>

          <AbDivider />

          <div className="flex-container seat-size">
            <div className='seat-size-slider'>
              <div className='smaller'></div>
              <input type="range" min="30" max="115" step="3" value={seatSize} onChange={this.onSeatSizeChange} />
              <div className="larger"></div>
            </div>
            <p><small>Seat Size</small></p>
          </div>

          <AbDivider />

          <div className="flex-container">
            <a href={`${helpers.rootUrl}print/seating-chart/room/${currentRoom.id}`} target='_blank' rel="noopener noreferrer" >
              <button className='big-button'>
                <FontAwesomeIcon icon={['far', 'print']} />
                <p>Print<br />Blank Chart</p>
              </button>
            </a>
          </div>

          <Route path="/room/:roomID/:offeringID" render={() =>
            <div className="flex-container">
              <a href="javascript:void(0)" onClick={ () => this.handleRoomChangeClick() }>
                <button className='big-button'>
                  <FontAwesomeIcon icon='map-marker-alt' />
                  <p>Change<br />Room</p>
                </button>
              </a>
            </div>
          } />



          <Route path="/room/:roomID/:offeringID" render={() =>
            <Fragment>
              <AbDivider />
              <div className='continue-seating' onClick={() => this.handleContinueSeatingClick()}>
                <button className='btn-accent'>Continue Seating <FontAwesomeIcon icon={['far', 'long-arrow-right']} /></button>
                <p>Return to assigning seats when ready</p>
              </div>
            </Fragment>
          } />

        </div>
      </div>
    )
  }
}

AbRoomOverview.propTypes = {
  currentOffering: PropTypes.object.isRequired,
  currentRoom:PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  newTable:PropTypes.func.isRequired,
  removeError: PropTypes.func.isRequired,
  requestRoomUpdate: PropTypes.func.isRequired,
  rooms: PropTypes.object.isRequired,
  seatCount: PropTypes.number.isRequired,
  setModal: PropTypes.func.isRequired,
  setPointSelection:PropTypes.func.isRequired,
  setTask:PropTypes.func.isRequired,
  setView:PropTypes.func.isRequired,
}