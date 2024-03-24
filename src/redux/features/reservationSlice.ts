import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ReservationState = {
	reservationItems: ReservationItem[];
};

const initialState: ReservationState = { reservationItems: [] };

export const reservationSlice = createSlice({
	name: "reservation",
	initialState,
	reducers: {
		addReservation: (state, action: PayloadAction<ReservationItem>) => {
			let haveChange = false;
			const remainItems = state.reservationItems.filter((item) => {
				if (item.id !== action.payload.id) return item;
				else {
					haveChange = true;
					return action.payload;
				}
			});

			if (!haveChange) remainItems.push(action.payload);
			state.reservationItems = remainItems;
			console.log(state.reservationItems.length);
		},
		removeReservation: (state, action: PayloadAction<String>) => {
			const remainItems = state.reservationItems.filter((obj) => {
				return (
					obj.id !== action.payload
				);
			});
			state.reservationItems = remainItems;
		},
	},
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
