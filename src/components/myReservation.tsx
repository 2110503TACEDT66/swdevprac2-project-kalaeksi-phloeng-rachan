"use client";
import { removeReservation } from "@/redux/features/reservationSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import Image from "next/image";

export default function ReservationList() {
	const massageItem = useAppSelector(
		(state) => state.reservationSlice.reservationItems
	);
	const dispatch = useDispatch<AppDispatch>();
	console.log(massageItem.length);
	return (
		<div className="mx-[240px]">
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
			<div className="flex">
				<Image src={"/img/massage1.jpg"} width={0} height={0} sizes="100vh" alt="example massage" className="w-[480px] h-[300px] rounded-[20px]"></Image>
				<div
					className="rounded-[20px] ml-[60px]"
				>
					<div className="text-xl">name</div>
					<div className="text-xl">email</div>
					<div className="text-xl">phoneNumber</div>
					<div className="text-xl">shop</div>
					<div className="text-xl">reservationDate</div>
					<button
						className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
						onClick={() => dispatch(removeReservation(""))}
					>
						Remove from booking list
					</button>
				</div>
			</div>
		</div>
	);
}
