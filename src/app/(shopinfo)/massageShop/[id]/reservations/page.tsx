"use client";
import DateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/cartSlice";
import Image from "next/image";
export default function Reservations() {
	const urlParams = useSearchParams();
	const shop = urlParams.get("massageShop");

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
	const dispatch = useDispatch<AppDispatch>();

	const makeBooking = () => {
		if (shop) {
			const item: ReservationItem = {
				name: name,
				email: email,
                phoneNumber: phoneNumber,
				shop: shop,
				reservationDate: dayjs(pickupDate).format("YYYY/MM/DD"),
			};
			dispatch(addReservation(item));
			console.log(item);
		}
	};

	return (
		<main>
			<div className="flex mx-[60px] mt-[120px]">
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
					<h1 className="text-5xl text-center mt-5 font-weight: 700">Reservation</h1>
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
                                    makeBooking();
                                    e.preventDefault();
                                }}
                            >
                                Finish reservation
                            </button>
                        </div>
					</form>
				</div>
			</div>
		</main>
	);
}
