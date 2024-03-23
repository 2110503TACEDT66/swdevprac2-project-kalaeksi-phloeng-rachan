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
	const hospital = urlParams.get("Hospital");

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [citizen, setCitizen] = useState<string>("");
	const [selectedHospital, setSelectedHospital] = useState("");
	const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
	const dispatch = useDispatch<AppDispatch>();

	const makeBooking = () => {
		if (hospital) {
			const item: BookingItem = {
				name: firstName,
				surname: lastName,
				id: citizen,
				hospital: selectedHospital,
				bookDate: dayjs(pickupDate).format("YYYY/MM/DD"),
			};
			dispatch(addReservation(item));
			console.log(item);
		}
	};

	return (
		<main>
			<div className="flex">
				<Image
					src={"/img/massage1.jpg"}
					alt="Image example"
					width={0}
					height={0}
                    sizes="100vh"
					className="w-[1200px] h-[720px] object-fit"
				></Image>
				<div className="w-fit h-auto m-auto p-6 pt-3 relative top-[50px] border-2 border-black rounded-xl bg-slate-200">
					<h1 className="text-4xl text-center mt-5">Vaccine Booking</h1>
					<h2 className="text-1xl text-center mt-2">{hospital}</h2>
					<form>
						<div className="mb-3">
							<h2 className="text-xl">Name</h2>
							<TextField
								variant="standard"
								name="Name"
								label="Name"
								fullWidth
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							></TextField>
						</div>
						<div className="mb-3">
							<h2 className="text-xl">LastName</h2>
							<TextField
								variant="standard"
								name="LastName"
								label="LastName"
								fullWidth
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							></TextField>
						</div>
						<div className="mb-3">
							<h2 className="text-xl">CitizenID</h2>
							<TextField
								variant="standard"
								name="Citizen ID"
								label="Citizen ID"
								fullWidth
								value={citizen}
								onChange={(e) => setCitizen(e.target.value)}
							></TextField>
						</div>
						<div className="mb-3">
							<h2 className="text-xl">Hospital</h2>
							<Select
								variant="standard"
								id="hospital"
								name="Hospital"
								fullWidth
								value={selectedHospital}
								onChange={(e) => {
									setSelectedHospital(e.target.value);
								}}
							>
								<MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
								<MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
								<MenuItem value="Thammasat">
									Thammasat University Hospital
								</MenuItem>
							</Select>
						</div>
						<DateReserve
							onDateChange={(value: Dayjs) => {
								setPickupDate(value);
							}}
						/>
						<br />
						<button
							name="Book Vaccine"
							className="bg-green-700 p-2 rounded-lg text-white text-xl"
							onClick={(e) => {
								makeBooking();
								e.preventDefault();
							}}
						>
							Book Vaccine
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
