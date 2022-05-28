     import SignUpForm from '../../components/sign-up-form/SignUpForm'
     import SignInForm from '../../components/sign-in-form/SignInForm'
     import './auth.scss'
     

const Authentication = () =>{
     return(
         <div >
             <h1 style={{marginLeft:'11rem'}}>Sign In Page</h1>
             <div className="authentication-container">
             <SignInForm />
             <SignUpForm />
             </div>
         </div>
     )
}

export default Authentication