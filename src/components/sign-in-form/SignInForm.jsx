import { useState} from 'react'
import {signInWithGooglePopup, SignUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import {useNavigate} from 'react-router-dom'


import Button from '../button/Button'
import FormInput from "../form-input/FormInput"
import { SignUpContainer, Buttons } from './sign-in.styles'



const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const navigate = useNavigate()

  const [formFields, setFormFields] = useState(defaultFormFields)
  
  const { email, password } = formFields
  
  const onChangeHandler = (e) =>{
    const { value, name } = e.target
    setFormFields((prevValue)=>{
      return {
        ...prevValue,
        [name]: value
      }
    })

  }

  const signInWithGoogle = async () =>{
   await signInWithGooglePopup();
   navigate("/")
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const {
        user
      } = await SignUserWithEmailAndPassword(email, password)
      
      setFormFields(defaultFormFields)
      

    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert('user with this email not found')
          break
        default:
          break;
      }
      console.log(error);
    }

  }

  return (
    <SignUpContainer>
      <h2>Already have an account</h2>
      <span>Sign in with email and password</span>
       <form >
       <FormInput label={'email'}
        type='email'
        name='email'
        value={email}
         required
         onChange={onChangeHandler}
        />

        <FormInput label={'password'}
        type='password'
        name='password'
        value={password}
         required
         onChange={onChangeHandler}
        />
       </form>
         <Buttons>
           <Button onClick={onSubmitHandler}>
             Sign In
           </Button>

           <Button buttonType={'google'} onClick={signInWithGoogle}>
             Google sign-in
           </Button>
         </Buttons>
         

    </SignUpContainer>
  )
}

export default SignInForm
