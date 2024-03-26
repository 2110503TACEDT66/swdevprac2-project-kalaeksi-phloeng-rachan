interface ReviewJson {
	success: boolean;
	count: number;
	data: ReviewItem[];
}

interface ReviewItem {
	_id: string;
    reviewPoint: number;
    comment: string;
	user:{
        _id: string;
        name: string;
    }
    createAt: string;
}