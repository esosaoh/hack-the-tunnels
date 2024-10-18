import { useLocation, useNavigate } from "react-router-dom";
import "./Base.style.scss";
import { useAccountContext } from "@/context";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

function Base({ children }: Props) {
  const { loggedIn } = useAccountContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/login");
    }

    if (loggedIn === true) {
      if (location.pathname === "/login") {
        navigate("/");
      }
    }
  }, [loggedIn, navigate]);

  return <div>{children}</div>;
}

export default Base;
