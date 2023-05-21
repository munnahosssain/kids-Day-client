import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  const { userLogin, googleSignUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp();
  };

  useTitle("Login");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Login</h1>
        <div className="card flex-shrink-0 w-96 max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="">
                Don't have an account?{" "}
                <Link to="/register" className="link link-hover font-semibold">
                  Sign up
                </Link>
              </label>
            </form>
            <div className="divider">OR</div>
            <button className="btn" onClick={handleGoogleSignIn}>
              <div className=" flex items-center">
                <FcGoogle size={32} /> Sign In
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
