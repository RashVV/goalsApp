import React from "react";

export const Goals = ({goals}) => {
  return (
    <ul className="list-group">
      {goals.map(goal => (
        <li
        className="list-group-item goal"
        key={goal.id}
        >
        <div>
          <strong>{goal.title}</strong>
          <small>{new Date().toLocaleDateString()}</small>
        </div>
          <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          >
          &times;
          </button>
        </li>
      ))}
    </ul>
  )
}
