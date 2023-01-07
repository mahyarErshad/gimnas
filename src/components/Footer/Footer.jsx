import React from "react";
import gimnas from "../../assets/images/logo-black.png";

function Footer() {
  return (
    <footer className="flex-full-center flex-col bg-white py-9 px-4">
      <img className="w-[12.5rem] h-[2.5rem] mb-8" src={gimnas} alt="Gimnas Logo" />
      <p className="text-[#999] text-lg">&copy; طراحی شده توسط گروه طراحی وب راهینو.</p>
    </footer>
  );
}

export default Footer;
