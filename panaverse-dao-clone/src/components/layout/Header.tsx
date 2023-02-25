import Logo from "public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wraper from "../shared/Wraper";

const Header = () => {
  return (
    <Wraper >
     {/* item-center for vertical alignment */}
     {/* justify-between for horizontal alignmnet */}
    <header className="flex justify-between bg-white py-5 sticky top-0 items-center">
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
    </header>
    </Wraper>
  );
};

export default Header;
