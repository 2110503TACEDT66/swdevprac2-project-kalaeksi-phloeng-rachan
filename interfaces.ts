interface HospitalItem {
	_id: string;
	name: string;
	address: string;
	district: string;
	province: string;
	postalcode: string;
	tel: string;
	picture: string;
	__v: number;
	id: string;
}

interface ReservationJson {
	success: boolean;
	count: number;
	pagination: Object;
	data: ReservationItem[];
}

interface ReservationItem {
	_id: string;
	name: string;
    email: string;
	phoneNumber: string;
	massageShop: {
		name: string;
		id: string;
	}
	pickupDate: string;
}

