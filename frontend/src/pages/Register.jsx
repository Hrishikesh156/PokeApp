import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {Button,Input} from  '@material-tailwind/react'
import {Link} from 'react-router-dom'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {/* <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section> */}

<div className=' grid  place-items-center'>
      <form onSubmit={onSubmit}>
              <Card className="w-96 m-10" >
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Register
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Name" size="lg" 
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={onChange}/>

            <Input label="Email" size="lg" 
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={onChange}/>


          <Input label="Password" size="lg" 
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={onChange}   
          />

          <Input label="Confirm Password" size="lg" 
            type='password'
            id='password2'
            name='password2'
            value={password2}
            onChange={onChange}            
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button type='submit' variant="gradient" fullWidth>
           Register
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link to='/login'>
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Sign in
            </Typography> </Link>
          </Typography>
        </CardFooter>
      </Card>
        </form>
      </div>
    </>
  )
}

export default Register
