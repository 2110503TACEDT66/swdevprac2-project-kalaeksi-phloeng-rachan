import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";
export default async function TopMenu() {
	const session = await getServerSession(authOptions);

	return (
		<div className="w-full h-[80px] bg-[#FFD933] flex fixed z-30 justify-end">
			<div className="justify-start flex w-full">
				<Image
					src={"/img/logo.png"}
					className="h-[80px] w-[80px] ml-[60px] object-fit"
					alt="logo"
					width={0}
					height={0}
					sizes="100vh"
				/>
				<div className="text-[24px] font-bold mt-auto mb-auto ml-2">
					<p className="m-0">Monkey</p>
					<p className="m-0">Massage</p>
				</div>
			</div>

			<TopMenuItem title="Shop" icon="storefront" pageRef="/car" />
			<TopMenuItem title="Reservations" icon="spa" pageRef="/reservations" />
			<div className="w-fit text-[24px] text-center font-bold flex mt-auto mb-auto ml-4 mr-4">
				{session ? (
					<Link href="/api/auth/signout">
						<div className="flex items-center ">
							Sign-Out of {session.user?.name}{" "}
						</div>
					</Link>
				) : (
                    <div className="flex items-center">
                        <Link href="/api/auth/signin" className="decoration-inherit">
                            <div className="text-[24px] font-bold text-[#203541] w-fit">
                                Login
                            </div>
                        </Link>
                        <Link href="/api/auth/signin" className="decoration-inherit">
                            <div className="text-[24px] font-bold text-[#203541] w-[100px]">
                                Sign-In
                            </div>
                        </Link>
                    </div>
				)}
			</div>
		</div>
	);
}
