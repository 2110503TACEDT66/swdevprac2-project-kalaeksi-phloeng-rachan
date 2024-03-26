import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";
import getUserProfile from "@/libs/getUserProfile";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  if (session && session.user.token) {
    var profile = await getUserProfile(session.user.token);
  }

  return (
    <div className="top-0 left-0 right-0 h-[80px] bg-[#FFD933] flex fixed z-30 justify-end text-[#203541] border-b-[2px] border-[#EEEEEE] font-bold">
      <Link href="/" underline="none" className="justify-start flex w-full">
        <Image
          src={"/img/image-2@2x.png"}
          className="h-[80px] w-[80px] ml-[60px] object-fit"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
        <div className="text-2xl font-bold mt-auto mb-auto ml-2 text-[#203541]">
          <p className="m-0">Monkey</p>
          <p className="m-0">Massage</p>
        </div>
      </Link>

      <TopMenuItem title="Shop" icon="storefront" pageRef="/massageShop" />
      <TopMenuItem
        title="My reservations"
        icon="spa"
        pageRef="/myReservations"
      />
      <div className="w-fit text-2xl text-center font-bold flex mt-auto mb-auto ml-4 mr-4">
        {session ? (
          <div className="flex items-center text-[#203541]">
            <FaRegUserCircle className="mr-2" />
            {profile.data?.name}
            <Link href="/api/auth/signout" underline="none">
              <FaPowerOff className="ml-4 text-[#203541]" />
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/api/auth/logout" underline="none">
              <div className="text-[24px] font-bold text-[#203541] w-fit">
                Login
              </div>
            </Link>
            |
            <Link href="/api/auth/register" underline="none">
              <div className="text-[24px] font-bold text-[#203541] w-[100px]">
                Register
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
