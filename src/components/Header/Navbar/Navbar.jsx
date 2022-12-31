import React, { memo, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { Transition } from "@headlessui/react";
import HeaderNavLinks from "../../Utils/HeaderNavLinks/HeaderNavLinks";
import { ReactComponent as CloseIcon } from "../../../assets/images/closeIcon.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = () => {
    return (
      <>
        <HeaderNavLinks color="text-[#bbb]" title="شروع سفر" />
        <HeaderNavLinks title="پیش نمایش ها" />
        <HeaderNavLinks title="ویژگی ها" />
        <HeaderNavLinks href="https://www.rstheme.com/products/documentations/gimnas/" title="مستندات آنلاین" />
      </>
    );
  };
  return (
    <nav className="pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0"></div>
            <div className="hidden lg:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <NavLinks />
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-primary absolute right-[10%] top-[3.2%] inline-flex items-center justify-center p-2 rounded-md text-white hover:opacity-90 transition-all" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <CloseIcon />
              )}
            </button>
          </div>
          <img className="max-md:max-w-[9.375rem] md:max-w-[12.5rem]" src={logo} alt="Logo" />
        </div>
      </div>
      <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        {() => (
          <div className="lg:hidden" id="mobile-menu">
            <ul ref={React.createRef()} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinks />
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default memo(Navbar);
