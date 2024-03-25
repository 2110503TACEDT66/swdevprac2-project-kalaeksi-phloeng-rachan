"use client";
import Image from "next/image";
import { Rating } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyReservation() {
	const { data: session } = useSession();

	const [massageJsonItem, setMassageJsonItem] = useState<ReservationJson>();

	useEffect(() => {
		fetch(
			"${process.env.BACKEND_URL}/api/MassageShops/65fdcf60873a4d1f9d5e3185/reservations",
			{
				method: "GET",
				headers: {
					authorization: `Bearer ${session?.user.token}`,
					"Content-Type": "application/json",
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setMassageJsonItem(data);
			});
	}, []);

	return (
		<div className="mx-[240px] h-[91vh] flex-col place-content-around">
			<>
				{massageJsonItem?.data.length !== 0
					? massageJsonItem?.data.map((massageItem: ReservationItem) => (
							<div className="flex justify-center mt-5">
								<Image
									src={"/img/massage1.jpg"}
									width={0}
									height={0}
									sizes="100vh"
									alt="example massage"
									className="w-[480px] h-[250px] rounded-[20px]"
								></Image>
								<div className="rounded-[20px] ml-[60px] w-[900px] h-[250px] border-2 border-[#EEEEEE] font-medium flex">
									<div className="p-5 w-full">
										<div className="text-5xl">
											{massageItem.massageShop.name}
										</div>
										<Rating name="read-only" value={4} readOnly size="large" />
										<div className="text-2xl mt-2">
											Name: {massageItem.name}
										</div>
										<div className="text-2xl">Email: {massageItem.email}</div>
										<div className="text-2xl">
											Phone number: {massageItem.phoneNumber}
										</div>
										<div className="text-2xl">
											Reservation date: {massageItem.pickupDate}
										</div>
									</div>

									<Link
										className="bg-[#FFD933] w-[150px] h-full flex justify-center items-center"
										href={`/myReservations/${massageItem._id}/edit?massageShop=${massageItem.massageShop.name}&name=${massageItem.name}&email=${massageItem.email}&phoneNumber=${massageItem.phoneNumber}`}
									>
										<MdOutlineEdit size="48px" color="#203541" />
									</Link>

									<button
										className="bg-[#F62A66] w-[150px] h-full flex justify-center items-center rounded-tr-[20px] rounded-br-[20px]"
										onClick={() => {}}
									>
										<RiDeleteBin6Line size="48px" color="#203541" />
									</button>
								</div>
							</div>
					  ))
					: "No massage Reservation"}
			</>
			{/* <div className="flex justify-center mt-5">
				<Image
					src={"/img/massage1.jpg"}
					width={0}
					height={0}
					sizes="100vh"
					alt="example massage"
					className="w-[480px] h-[250px] rounded-[20px]"
				></Image>
				<div className="rounded-[20px] ml-[60px] w-[900px] h-[250px] border-2 border-[#EEEEEE] font-medium flex">
					<div className="p-5 w-full">
						<div className="text-5xl">Thai Sabai Massage</div>
						<Rating name="read-only" value={4} readOnly size="large" />
						<div className="text-2xl mt-2">Name: Pasit khumsena</div>
						<div className="text-2xl">Email: webbalaka@gmail.com</div>
						<div className="text-2xl">Phone number: 0918683540</div>
						<div className="text-2xl">Reservation date: 2024/04/25</div>
					</div>

					<button
						className="bg-[#FFD933] w-[150px] h-full flex justify-center items-center"
						onClick={() => {}}
					>
						<MdOutlineEdit size="48px" color="#203541"/>
					</button>

					<button
						className="bg-[#F62A66] w-[150px] h-full flex justify-center items-center rounded-tr-[20px] rounded-br-[20px]"
						onClick={() => {}}
					>
						<RiDeleteBin6Line size="48px" color="#203541"/>
					</button>
				</div>
			</div> */}
		</div>
	);
}
