function Footer() {
  return (
    <div style={{ margin: "50px 0 0 0" }}
    className="flex items-center justify-center text-white max-h-[13rem] h-[35vh] border-t border-[#70B5ED] ">
      <div className="container flex-col items-center justify-around flex-1">
        <a href="/">
          <p className="text-center">FocusFlow</p>
        </a>

        <a href="/">
          <p className="flex flex-col items-center justify-center my-4">
            &copy; 2024 Your Company Name. All rights reserved.
          </p>
        </a>
      </div>
      <div className="flex flex-1">
        <div className="container flex justify-around">
          <div className="flex-col">
            Navigation
            <ul className="my-2 list-none">
              <a href="/">
                <li className="my-2 text-xs">home</li>
              </a>
              <a href="/about">
                <li className="my-2 text-xs">product</li>
              </a>
            </ul>
          </div>
          <div>
            Website
            <ul className="my-2 list-none">
              <a href="/about">
                <li className="my-2 text-xs">About</li>
              </a>
              <a href="/bruhhh">
                <li className="my-2 text-xs">Terms of use</li>
              </a>
              <a href="/bruhhh">
                <li className="my-2 text-xs">Privacy Policy</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
}
export default Footer;
