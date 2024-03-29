import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Yoda from "../../public/images/baby-yoda-hi.gif";
import Image from "next/image";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/DashBoard/MainHome" },
  { name: "About", href: "/DashBoard/About" },
  { name: "Play", href: "/DashBoard/Play" },
  { name: "Contact", href: "/DashBoard/Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <header className=" inset-x-0 top-0 z-50 bg-transparent">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 bg-transparent"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 bg-transparent">
            <a href="/DashBoard/MainHome" className="-m-1.5 p-1.5">
              <span className="sr-only">Balance Yoda</span>
              <Image
                className="h-10 w-20 bg-transparent rounded-full ImageGlow"
                src={Yoda}
                alt="My Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden bg-transparent">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-transparent"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 bg-transparent">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-extrabold m-10 leading-8 text-white  navigateLinks bg-transparent"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end bg-transparent">
            <a
              href="/profile/SignUp"
              className="text-xl font-extrabold leading-8 text-white navigateLinks bg-transparent"
            >
              Log in &rarr;
            </a>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Balance Yoda</span>
                <Image
                  className="h-10 w-20 bg-transparent rounded-full ImageGlow"
                  src={Yoda}
                  alt="My Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base bg-transparent font-semibold leading-7 text-white hover:bg-gray-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/profile/SignUp"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base bg-transparent font-semibold leading-7 bg-white hover:bg-gray-500"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
export default Navbar;
