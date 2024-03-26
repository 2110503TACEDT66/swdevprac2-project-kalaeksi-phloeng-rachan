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

interface MassageShopJson {
	success: boolean;
	count: number;
	pagination: Object;
	data: MassageShopItem[];
}

interface MassageShopItem {
	_id: string;
	name: string;
	address: string;
	tel: string;
	open: string;
	close: string;
	review: Object[]
    reservations: Object[],
	id: string;
}
