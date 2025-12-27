import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
const API = import.meta.env.VITE_BACKEND_URL;

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  // LOGIN STATE
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // SIGNUP STATE
  const [username, setUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginEmail === "madhu" && loginPassword === "123") {
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("role", "admin");
      toast.success("Admin Login success!!");
      navigate("/admin");
      return;
    }

    try {
      const { data } = await axios.post(`${API}/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      });

      toast.success(data.message);
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("user_id", data.user._id);
      navigate("/products");
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  // SIGNUP FUNCTION
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API}/auth/register`, {
        name: username,
        email: signupEmail,
        password: signupPassword,
      });

      toast.success(data.message);
      sessionStorage.setItem("isLoggedIn", true);
      navigate("/products");
    } catch (err) {
      toast.error(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-yellow-50">
      <div
        className="relative w-full max-w-[700px] bg-white rounded-xl overflow-hidden
                   border-2 border-yellow-900/90 shadow-black/50 shadow-2xl h-[450px]"
      >
        {/* TEXT */}
        <span
          className={`sm:absolute text-3xl text-white/90
                      left-[10%] top-[40%] z-20 font-bold
                      transition-all duration-[2400ms]
                      ${isSignup ? "translate-x-0 opacity-100" : "translate-x-[350px] opacity-100"}`}
        >
          {isSignup ? "Welcome!" : "Welcome Back!!"}
        </span>

        {/* ROLLING CIRCLE */}
        <span
          className={`absolute -bottom-40 right-30
                      w-[900px] h-[900px] sm:w-[1500px] sm:h-[1500px]
                      bg-yellow-900/90 rounded-full
                      transition-all duration-2000 ease-in-out
                      z-10
                      ${isSignup ? "translate-x-[-180px] rotate-0" : "translate-x-[1200px] rotate-[360deg]"}`}
        ></span>

        {/* FORMS */}
        <div className="relative w-full h-full flex flex-col sm:flex-row">

          {/* LOGIN FORM */}
          <form
            onSubmit={handleLogin}
            className={`w-full sm:w-1/2 p-6 sm:p-10 flex flex-col gap-6 justify-center
                        transition-all duration-[2500ms] ${isSignup ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
          >
            <h1 className="text-3xl font-bold text-yellow-900/90">Login</h1>

            <input
              type="text"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="bg-yellow-900/90 text-white py-2 rounded-lg"
            >
              Login
            </button>

            <p className="text-sm">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="text-yellow-900/90 underline underline-offset-3 font-bold"
              >
                Sign up
              </button>
            </p>
          </form>

          {/* SIGNUP FORM */}
          <form
            onSubmit={handleSignup}
            className={`w-full sm:w-1/2 p-6 sm:p-10 flex flex-col gap-6 justify-center
                        transition-all duration-[2400ms] ${isSignup ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <h1 className="text-3xl font-bold text-yellow-900/90">Sign Up</h1>

            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="bg-yellow-900/90 text-white py-2 rounded-lg"
            >
              Register
            </button>

            <p className="text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="text-yellow-900/90 underline underline-offset-3 font-bold"
              >
                Login
              </button>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AuthPage;
