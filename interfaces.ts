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

interface HospitalJson {
	success: boolean;
	count: number;
	pagination: Object;
	data: HospitalItem[];
}

interface ReservationItem {
	name: string;
    email: string;
	phoneNumber: string;
	shop: string;
	reservationDate: string;
}

