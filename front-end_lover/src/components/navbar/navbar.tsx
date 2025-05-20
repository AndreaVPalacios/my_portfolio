// components/NavbarVertical.tsx

import {
  ComputerDesktopIcon,
  FolderIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const NavbarVertical = () => {
  const navItems = [
    { name: "Inicio", icon: <HomeIcon className="w-6 h-6" />, path: "/" },
    {
      name: "Proyectos",
      icon: <ComputerDesktopIcon className="w-6 h-6" />,
      path: "/proyectos",
    },
    {
      name: "Experiencia",
      icon: <FolderIcon className="w-6 h-6" />,
      path: "/experiencia",
    },
    {
      name: "Contáctame",
      icon: <PhoneIcon className="w-6 h-6" />,
      path: "/contacto",
    },
  ];

  return (
    <nav className="fixed justify-center left-0 top-0 h-full w-16 md:w-20 bg-red-950 flex flex-col items-center py-8 z-50">
      <div className="flex flex-col items-center space-y-12 ">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="group flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="mb-1">{item.icon}</span>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavbarVertical;
