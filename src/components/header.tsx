import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import { NuberLogo } from "./nuber-logo";

export const Header: React.FC = () => {
  const { data } = useMe();

  return (
    <header className="py-4">
      <div className="w-full max-w-screen-xl px-5 xl:px-0 mx-auto flex justify-between items-center">
        <NuberLogo width={24} />
        <span className="text-xs">
          <Link to="/my-profile">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </Link>
        </span>
      </div>
    </header>
  );
};
