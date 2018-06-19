import { combineReducers } from 'redux';
import C from '../constants';

/**
 * App / view
 */
const view = (state = null, action) => {
  switch (action.type) {
    case C.SET_VIEW:
      return action.view
    default:
      return state
  }
}

/**
 * app / currentRoom
 */
const currentRoom = (state = {
  id:null,
  name:null,
  seat_size:null
}, action) => {
  switch (action.type) {
    case C.SET_CURRENT_ROOM:
      return action.room
    default:
      return state
  }
}

/**
 * app / currentSeatId
 */
const currentSeatId = (state = null, action) => {
  switch (action.type) {
    case C.SET_CURRENT_SEAT:
      return action.seatID
    default:
      return state
  }
}

/**
 * app / currentStudentId
 */
const currentStudentId = (state = null, action) => {
  switch (action.type) {
    case C.SET_CURRENT_STUDENT:
      return action.studentID
    default:
      return state
  }
}


/**
 * app / currentOffering
 */
const currentOffering = (state = {
  course_num:null,
  id:null,
  instructors:[],
  name:null,
  room_id:null,
  students:[]
}, action) => {
  switch (action.type) {
    case C.SET_CURRENT_OFFERING:
      return action.offering
    default:
      return state
  }
}


/**
 * App / task
 */
const task = (state = '', action) => {
  switch (action.type) {
    case C.SET_TASK:
      return action.task
    default:
      return state;
  }
}

/**
 * App / tempTable
 */
const tempTable = (state = {}, action) => {
  switch (action.type) {
    case C.NEW_TABLE:
      return {
        id:'new',
        room_id:null,
        seatCount:0,
        coords:{}
      }
    case C.SELECT_TABLE:
      return {
        id:action.tableID,
        room_id:action.roomID,
        seatCount:action.seatCount,
        coords:{
          'start':action.coords.start,
          'end':action.coords.end,
          'curve':action.coords.curve,
        }
      }
    case C.SET_SEAT_COUNT:
      return {
        ...state,
        seatCount: action.seatCount
      }
    case C.SAVE_POINT_TO_TEMP_TABLE:
      return {
        ...state,
        coords: {
          ...state.coords,
          [action.pointType]:action.pointKey
        }
      }
    case C.CLEAR_TEMP_TABLE:
      return {};
    default:
      return state
  }
}

/**
 * App / pointSelection
 */
const pointSelection = (state = null, action) => {
  switch (action.type) {
    case C.SET_POINT_SELECTION:
      return action.pointType
    default:
      return state;
  }
}

/**
 * app / loading
 */
const loading = (state = {
  rooms:false,
  tables:false,
  offerings:false,
  students:false
}, action) => {
  switch(action.type) {
    case C.SET_LOADING_STATUS:
      return {
        ...state,
        [action.loadingType]: action.status
      }
    default:
      return state;
  }
}

/**
 * entities / offerings
 */
const offerings = (state = {}, action) => {
  switch (action.type) {
    case C.RECEIVE_OFFERINGS:
      return action.offerings
    case C.UPDATE_OFFERING_ROOM:
      return {
        ...state,
        [action.offering_id]: {
          ...state[action.offering_id],
          'room_id':action.room_id
        }
      }
    default:
      return state;
  }
}

/**
 * entities / students
 */
const students = (state = {}, action) => {
  switch (action.type) {
    case C.RECEIVE_STUDENTS:
      return {
        ...state,
        ...action.students
      }
    case C.SEAT_STUDENT:
      return {
        ...state,
        [action.student_id]: {
          ...state[action.student_id],
          seats: {
            ...state[action.student_id].seats,
            [action.offering_id]:action.seat_id
          }
        }
      }
    case C.UPDATE_STUDENT:
      return {
        ...state,
        [action.student_id]: {
          ...state[action.student_id],
          [action.attribute]:action.value
        }
      }
    default:
      return state;
  }
}

/**
 * entities / rooms
 */
const rooms = (state={}, action) => {
  switch (action.type) {
    case C.RECEIVE_ROOMS:
      return action.rooms;
    case C.SET_SEAT_SIZE:
      return {
        ...state,
        [action.roomID]: {
          ...state[action.roomID],
          seat_size: action.seatSize
        }
      }
    default:
      return state;
  }
}

/**
 * entities / tables
 */
const tables = (state={}, action) => {
  switch (action.type) {
    case C.RECEIVE_TABLES:
      return action.tables;
    case C.REMOVE_TABLE:
      delete state[action.tableID];
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  app: combineReducers({
    view,
    currentRoom,
    currentOffering,
    task,
    currentSeatId,
    currentStudentId,
    tempTable,
    pointSelection,
    loading
    // flipPerspective,
  }),
  entities: combineReducers({
    students,
    offerings,
    rooms,
    tables
  })
})

export default rootReducer