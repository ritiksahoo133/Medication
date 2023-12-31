import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import { resetAuthData } from "../redux/slices/auth-slice";
import ProfileDropdown from "./ProfileDropdown";

const MobileMenu = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalCartItems = useSelector((state) => state?.cart?.totalQuantity);
  const { accessToken } = useSelector((state) => state?.auth || {});

  const _handleLogout = () => {
    dispatch(resetAuthData());
  };

  const activeClassName = "text-primary";
  const mobileMenuClasses = `lg:hidden fixed top-0 z-10 right-0 bg-white shadow-lg flex flex-col gap-3 h-screen w-3/4 s:w-1/2 md:w-1/3 pl-6 transition duration-300 ${props.className}`;

  return (
    <div className={mobileMenuClasses}>
      <nav className="relative">
        <ul className="mt-10 flex flex-col gap-6 text-sm xs:text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "transition duration-200 hover:text-primary"
              }
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "transition duration-200 hover:text-primary"
              }
            >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "transition duration-200 hover:text-primary"
              }
            >
              PRODUCTS
            </NavLink>
          </li>

          <li>
            <Link to="/cart" className="relative">
              <i className="fa-solid fa-cart-shopping fa-lg" />
              <small className="absolute -right-2 -top-2 flex aspect-square h-4 w-5 items-center justify-center rounded-lg bg-light-red text-white">
                {totalCartItems}
              </small>
            </Link>
          </li>

          <li>
            {!accessToken ? (
              <Button
                className="primary-btn"
                onClick={() => navigate("/signin")}
              >
                <i className="fa-solid fa-circle-user fa-lg" /> Sign In
              </Button>
            ) : (
              <ProfileDropdown />
            )}
          </li>
        </ul>
        <i
          className="fa-solid fa-xmark fa-lg absolute right-5 top-6"
          onClick={props.onClose}
        />
      </nav>
    </div>
  );
};

export default MobileMenu;
