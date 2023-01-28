import React, { Fragment } from "react";
import { Form } from "../components/Form";
import { Goals } from "../components/Goals";

export const Home = () => {
  const goals = new Array(3)
  .fill('')
  .map((_, i) => ({id: i, title: `Goal ${i+1}`}))
  return (
    <Fragment>
      <Form />
      <hr />
      <Goals goals={goals} />
    </Fragment>
  )
}
