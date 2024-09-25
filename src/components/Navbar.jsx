import * as React from "react";
import logo from "../assets/LOGO.png";
import Button from "@mui/material/Button";
export function Navbar() {
  return (
    <header className="bg-[#111729] flex text-[#FFFFFF] justify-evenly h-15 w-full">
      <div className="flex content-center justify-center flex-shrink-0 object-cover p-2 align-middle">
        {" "}
        <a href="/">
          <img alt="" src={logo} className="flex h-12 mx-2" />
        </a>
      </div>

      <div className="container flex content-center justify-center py-4 ">
        <a href="/">
          <p className="mx-2">Home</p>
        </a>
        <a href="/about">
          <p className="mx-2">About</p>
        </a>

        <a
          href="https://github.com/Tejsvapandey1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mx-2">Contact</p>
        </a>
      </div>
      <div className="p-2">
        <Button variant="outlined">
          <a href="/upload">
            <p className="text-xs" onClick={console.log("clicked")}>
              Get Started
            </p>
          </a>
        </Button>
      </div>
    </header>
  );
}
