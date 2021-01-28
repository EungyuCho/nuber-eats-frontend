import React from "react";
import { Link } from "react-router-dom";
import { UnderlineLink } from "../components/underline-link";

export const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <h2 className="font-semibold text-xl mb-3">Page Not Found.</h2>
    <h4 className="font-medium text-base mb-5">
      The page you're looking for does not exist or has moved.
    </h4>
    <UnderlineLink to="/" message="Go back home &rarr;" />
  </div>
);
