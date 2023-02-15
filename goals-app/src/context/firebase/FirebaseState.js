import React, {useReducer} from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { SHOW_LOADER, REMOVE_GOAL } from "../types";

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {

  const initialState = {
    notes: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = dispatch({type: SHOW_LOADER})

  const fetchGoals = async () => {
    const res = await axios.get(`${url}/notes.json`)

    console.log('fetchGoals', res.data)
  };

  const addGoal = async title => {
    const goal = {
      title, date: new Date().toJSON
    }
    const res = await axios.post(`${url}/notes.json`, goal)

    console.log('addGoal', res.data)
  };

  const removeGoal = async id => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({
      type: REMOVE_GOAL,
      payload: id
    })
  }

  return (
    <FirebaseContext.Provider value={{
      showLoader, addGoal, removeGoal, fetchGoals,
      loading: state.loading,
      notes: state.notes
    }}>

      {children}
    </FirebaseContext.Provider>
  )
}
