import React,{useState , useContext} from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <>
    <h2>Login Page</h2>
    <input 
    type="text"
    value={userName}
    onChange={(e)=> setUserName(e.target.value)}
    placeholder='UserName'
    />
    {" "}
    <input 
    type="password"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    placeholder='Password'
    />
    <button
    onClick={handleSubmit}
    >Submit</button>
    </>
  )
}

export default Login