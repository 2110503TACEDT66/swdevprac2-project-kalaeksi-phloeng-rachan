"use client";
import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/reservationSlice";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Reservations({ params }: { params: { id: string } }) {
	const urlParams = useSearchParams();
	const userName = urlParams.get("name");
	const userEmail = urlParams.get("email");
	const userPhoneNumber = urlParams.get("phoneNumber");

	const shop = urlParams.get("shop");

	const [isSending, setIsSending] = useState(false);
	const [isLoading, setLoading] = useState(true);

	const [name, setName] = useState<string>(userName || "");
	const [email, setEmail] = useState<string>(userEmail || "");
	const [phoneNumber, setPhoneNumber] = useState<string>(userPhoneNumber || "");
	const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
	const dispatch = useDispatch<AppDispatch>();

	const {data: session } = useSession();

	const check = () => {
		if (!name) {
			alert("Please input your name");
			return false;
		}
		if (!email) {
			alert("Please input your email");
			return false;
		}
		if (!phoneNumber) {
			alert("Please input your phone number");
			return false;
		}
		if (pickupDate === null) {
			alert("Please input your date");
			return false;
		}
		return true;
	};

	// useEffect( () => {
	// 	fetch('http://localhost:5000/api/MassageShops/65fdcf60873a4d1f9d5e3185/reservations',{
	// 		method: "POST",
	// 		headers: {
	// 			authorization: `Bearer ${session.user.token}`,
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			name: userName,
	// 			email: userEmail,
	// 			phoneNumber: userPhoneNumber,
	// 			pickupDate: dayjs(pickupDate).format("YYYY/MM/DD")
	// 		}),
	// 	})
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		alert(data.success);
	// 		// setLoading(false)
	// 	})
	// }, [isSending, isLoading]);

	async function post () {
		const response = fetch('http://localhost:5000/api/MassageShops/65fdcf60873a4d1f9d5e3185/reservations',{
			method: "POST",
			headers: {
				authorization: `Bearer ${session?.user.token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				phoneNumber: phoneNumber,
				massageShop: params.id,
				pickupDate: dayjs(pickupDate).format("YYYY/MM/DD")
			})
		});
		console.log((await response).json())
	}

	return (
		<main>
			<div className="flex mx-[60px] mt-[60px]">
				<div>
					<Image
						src={"/img/massage1.jpg"}
						alt="Image example"
						width={0}
						height={0}
						sizes="100vh"
						className="w-[1200px] h-[720px] rounded-[20px] object-fit"
					></Image>
				</div>
				<div className="w-[540px] h-[720px] ml-[60px] border-2 border-[#EEEEEE] rounded-xl px-[30px]">
					<h1 className="text-5xl text-center mt-5 font-weight: 700">
						Reservation
					</h1>
					<h2 className="text-2xl text-center mt-2 font-weight: 700">{shop}</h2>
					<form>
						<div className="mt-5 mb-4">
							<h2 className="text-xl">Name</h2>
							<TextField
								fullWidth
								value={name}
								className="bg-[#EEEEEE] rounded-[5px]"
								onChange={(e) => setName(e.target.value)}
							></TextField>
						</div>
						<div className="mb-4">
							<h2 className="text-xl">Email</h2>
							<TextField
								fullWidth
								value={email}
								className="bg-[#EEEEEE] rounded-[5px]"
								onChange={(e) => setEmail(e.target.value)}
							></TextField>
						</div>
						<div className="mb-4">
							<h2 className="text-xl">Phone number</h2>
							<TextField
								fullWidth
								value={phoneNumber}
								className="bg-[#EEEEEE] rounded-[5px]"
								onChange={(e) => setPhoneNumber(e.target.value)}
							></TextField>
						</div>

						<DateReserve
							onDateChange={(value: Dayjs) => {
								setPickupDate(value);
							}}
						/>
						<br />
						<div className="flex justify-center mt-4">
							<button
								name="Book Vaccine"
								className="bg-[#F62A66] w-[400px] h-[100px] rounded-[20px] text-white text-4xl"
								onClick={(e) => {
									// if (check()) {
										// setIsSending(true)
									// }
									post();
									e.preventDefault();
								}}
							>
								Finish reservation
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* <button onClick={() => setIsSending(true)}>click</button> */}
		</main>
	);
}
