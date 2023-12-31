import { SigninForm } from "../components";
import signinImage from "../assets/images/signin.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { isUserAuthenticated } from "../guards/auth-guard";

const Signin = () => {
  const navigate = useNavigate();
  const isAuthenticated = isUserAuthenticated();
  
  // If user is authenticated redirect to home page
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="container flex items-center md:gap-12 lg:gap-48 justify-center  md:justify-between mt-14">
      <div className="w-1/2 items-center hidden md:flex">
        <img src={signinImage} alt="Two doctors standing" />
      </div>

      <div className="md:w-1/2 flex flex-col items-end">
        <div>
          <h1 className="w-full text-center sm:text-left text-2xl xs:text-3xl md:text-4xl font-bold mb-2.5">
            Sign In
          </h1>

          <p className="text-center sm:text-left text-sm xs:text-base text-dark-grey mb-6 sm:mb-10">
            Sign in or Sign up to start ordering medicines, access your orders
            and more!
          </p>

          <SigninForm />

          <p className="text-sm xs:text-base mt-3 sm:mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
