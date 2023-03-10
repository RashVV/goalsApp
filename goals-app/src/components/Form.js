import React, {useState, useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)


  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      //..
      alert.show(' Ціль була встановлена ', 'success')
      setValue('')
    } else {
      alert.show(' Сформулюйте та введіть свою ціль!!! ')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введіть ціль яку Ви бажаєте досягти"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
      </div>
    </form>
  )
}
