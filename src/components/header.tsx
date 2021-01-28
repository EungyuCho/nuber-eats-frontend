import React from "react";
import { NuberLogo } from "./nuber-logo";

export const Header = () => (
  <header className="py-4">
    <div className="w-full max-w-screen-xl mx-auto">
      <NuberLogo mb={52} />
      im header!
    </div>
  </header>
);
