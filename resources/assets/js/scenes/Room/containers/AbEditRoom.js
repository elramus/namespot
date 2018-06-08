import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AbEditRoom from '../AbEditRoom'
import { newTable, setTask, setPointSelection, setSeatSizeRequest, setRoomLoadingStatus } from '../../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentRoom:state.app.currentRoom,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    newTable: () => {
      dispatch(newTable())
    },
    setTask: status => {
      dispatch(setTask(status))
    },
    setPointSelection: status => {
      dispatch(setPointSelection(status))
    },
    setSeatSizeRequest: (roomID, seatSize) => {
      dispatch(setSeatSizeRequest(roomID, seatSize))
    },
    setRoomLoadingStatus: (status) => {
      dispatch(setRoomLoadingStatus(status))
    }
  }
}

const AbEditRoomContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AbEditRoom))

export default AbEditRoomContainer;