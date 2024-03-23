"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function DateReserve({onDateChange}:{onDateChange:Function}) {

	const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
	return (
		<div className="w-fit h-auto p-10 pl-3 pt-5 ">
				<div className="mb-2">
					<h2 className="text-xl">Date</h2>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker value={reserveDate} onChange={(value) => {
							setReserveDate(value);
							onDateChange(value);
						}}/>
					</LocalizationProvider>
				</div>
		</div>
	);
}
