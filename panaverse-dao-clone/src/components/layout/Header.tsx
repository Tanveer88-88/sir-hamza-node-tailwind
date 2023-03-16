import Logo from "public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wraper from "../shared/Wraper";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10">
      <Wraper>
        {/* item-center for vertical alignment */}
        {/* justify-between for horizontal alignmnet */}
        <div className="flex justify-between  py-5 items-center">
          {/* Logo */}
          <div>
            {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
            <Image src={Logo} alt="panaverse dao logo"></Image>
          </div>

          {/* Navigation Bar */}
          <ul className="flex space-x-8 font-medium item-medium">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
          </ul>
        </div>
      </Wraper>
    </header>
  );
};

export default Header;
