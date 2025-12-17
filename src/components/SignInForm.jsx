import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
const API = import.meta.env.VITE_BACKEND_URL;


const SignInForm = () => {

    const navigate = useNavigate();

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleNameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
                const {data} = await axios.post(`${API}/auth/register`,
                {
                    name: username,
                    email:email , 
                    password : password
                })
                console.log("response => ",data)
                toast.success(data.message)
                sessionStorage.setItem('isLoggedIn',true)
                navigate('/products')
            }
            catch(err)
            {
                toast.error(err.message)
                navigate('/signin')
            }
        }


    return (
        <>
        <form className="flex flex-col rounded-lg bg-yellow-800/20 w-[450px] mt-20 mx-auto px-10 py-10 gap-7 border-1 border-yellow-900/20 shadow-black/20 shadow-lg">
            <h1 className="text-3xl font-bold text-center gap-5 text-yellow-800">Sign in</h1>
                <div className="flex flex-col gap-5">

                    <input type="text" 
                            placeholder="Enter Name" 
                            value = {username}s
                            onChange={handleNameChange}
                            className="p-3 border-1 border-yellow-800/50 rounded-lg text-lg">
                    </input>
                    <input type="text" 
                            placeholder="Enter Email ID" 
                            value = {email}
                            onChange={handleEmailChange}
                            className="p-3 border-1 border-yellow-800/50 rounded-lg text-lg">
                    </input>
                    <input type="password" 
                            placeholder="Enter Password" 
                            value = {password}
                            onChange={handlePasswordChange}
                            className="p-3 border-1 border-yellow-800/50 rounded-lg text-lg">

                    </input>
                </div>
                <button type="button" className="mx-auto py-3 w-[40%] bg-yellow-800 text-white/60 rounded-lg text-xl font-bold"
                onClick={handleSubmit}>
                    Register
                </button>

                <h1 className="text-md text-black/50 ">Already have an account? <Link to="/login" className="text-black/70 font-bold underline underline-offset-[5px]">Login</Link> </h1>
        </form>
        </>
    )
}

export default SignInForm;
