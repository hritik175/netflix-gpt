import Header from "./Header"
import { useState } from "react"


const Login = () => {

  const [isSignedIn, setIsSignedIn] = useState(true)
  
  const toggleForm = ()=>{
    setIsSignedIn(!isSignedIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt=""/>
      </div>
      <form className="w-3/12 p-8 my-36 mx-auto left-0 right-0 text-white absolute bg-black/80  rounded-lg">
        <h1 className="py-4 text-white text-2xl font-bold">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignedIn && (<input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-600" />)}
        <input type="text" placeholder="Email id" className="p-2 my-4 w-full bg-gray-600" />
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-600" />
        <button className="cursor-pointer bg-red-700 p-2 my-6 w-full rounded-sm">{isSignedIn ? "Sign In" : "Sign Up"}</button>
        <p className=" py-4 text-sm  " onClick={toggleForm}>{isSignedIn ? "New to Netflix? Sign Up now" : "Already Registered? Sign In"}</p>
      </form>

    </div>

  )
}

export default Login