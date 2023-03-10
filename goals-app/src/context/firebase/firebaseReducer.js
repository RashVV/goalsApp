import { ADD_GOAL, SHOW_LOADER, FETCH_GOALS, REMOVE_GOAL } from "../types"

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [ADD_GOAL]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, ...payload]
  }),
  [FETCH_GOALS]: (state, {payload}) => ({...state, notes: payload}),
  [REMOVE_GOAL]: (state, {payload}) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type]  || handlers.DEFAULT
  return handle(state, action)
}
