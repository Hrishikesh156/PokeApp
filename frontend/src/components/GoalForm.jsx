import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'
import {Button} from "@material-tailwind/react"
import './GoalItem.css'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          {/* <button className='btn btn-block' type='submit'>
            Add Goal
          </button> */}
          <Button type='submit' size="lg" variant="gradient" fullWidth>
             Add Goal
          </Button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
