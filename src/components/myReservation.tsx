"use client";
import { removeReservation } from "@/redux/features/reservationSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { Rating } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";

export default function ReservationList() {
	const massageItem = useAppSelector(
		(state) => state.reservationSlice.reservationItems
	);
	const dispatch = useDispatch<AppDispatch>();
	console.log(massageItem.length);
	return (
		<div className="mx-[240px] h-[91vh] flex-col place-content-around">
			{/* <>
				{massageItem.length == 0
					? "No massage Reservation"
					: massageItem.map((item) => (
							<div
								className="bg-blue-200 rounded px-5 mx-5 py-2 my-2 text-black"
								key={item.id}
							>
								<div className="text-xl">{item.name}</div>
								<div className="text-xl">{item.email}</div>
								<div className="text-xl">{item.phoneNumber}</div>
								<div className="text-xl">{item.shop}</div>
								<div className="text-xl">{item.reservationDate}</div>
								<button
									className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
									onClick={() => dispatch(removeReservation(""))}
								>
									Remove from booking list
								</button>
							</div>
					  ))}
			</> */}
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
						<div className="text-5xl">Thai Sabai Massage</div>
						<Rating name="read-only" value={4} readOnly size="large" />
						<div className="text-2xl mt-2">Name: Pasit khumsena</div>
						<div className="text-2xl">Email: webbalaka@gmail.com</div>
						<div className="text-2xl">Phone number: 0918683540</div>
						<div className="text-2xl">Reservation date: 2024/04/25</div>
					</div>

					<button
						className=" bg-[#F62A66] w-[180px] h-full flex justify-center items-center rounded-tr-[20px] rounded-br-[20px]"
						onClick={() => dispatch(removeReservation(""))}
					>
						<MdDeleteOutline size="48px" color="#203541"/>
					</button>
				</div>
			</div>
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
						<div className="text-5xl">Thai Sabai Massage</div>
						<Rating name="read-only" value={4} readOnly size="large" />
						<div className="text-2xl mt-2">Name: Pasit khumsena</div>
						<div className="text-2xl">Email: webbalaka@gmail.com</div>
						<div className="text-2xl">Phone number: 0918683540</div>
						<div className="text-2xl">Reservation date: 2024/04/25</div>
					</div>

					<button
						className=" bg-[#F62A66] w-[180px] h-full flex justify-center items-center rounded-tr-[20px] rounded-br-[20px]"
						onClick={() => dispatch(removeReservation(""))}
					>
						<MdDeleteOutline size="48px" color="#203541"/>
					</button>
				</div>
			</div>
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
						<div className="text-5xl">Thai Sabai Massage</div>
						<Rating name="read-only" value={4} readOnly size="large" />
						<div className="text-2xl mt-2">Name: Pasit khumsena</div>
						<div className="text-2xl">Email: webbalaka@gmail.com</div>
						<div className="text-2xl">Phone number: 0918683540</div>
						<div className="text-2xl">Reservation date: 2024/04/25</div>
					</div>

					<button
						className=" bg-[#F62A66] w-[180px] h-full flex justify-center items-center rounded-tr-[20px] rounded-br-[20px]"
						onClick={() => dispatch(removeReservation(""))}
					>
						<MdDeleteOutline size="48px" color="#203541"/>
					</button>
				</div>
			</div>
		</div>
	);
}
