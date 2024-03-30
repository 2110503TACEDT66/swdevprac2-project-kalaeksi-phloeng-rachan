import ProductCardDetail from "@/components/ProductCardDetail";
import { render, screen } from "@testing-library/react";

describe("Reservation test", () => {
	it("Should have massage shop name", () => {
		//Arrange
		render(
			<ProductCardDetail
				massageShopName={"Test Shop"}
				imgSrc={"/img/massage1.jpg"}
				massageShopAddress={"Test Address"}
				massageShopRating={5}
				massageShopId={"65fdcf60873a4d1f9d5e3185"}
				massageShopTel={"0000000000"}
				open={"2024-03-23T03:00:00.000+00:00"}
				close={"2024-03-23T15:00:00.000+00:00"}
			/>
		);
		//ACT
		const massageShopName = screen.getByText("Test Shop");
		const massageShopAddress = screen.getByText("Test Address");
		const massageShopTel = screen.getByText("tel. 0000000000")
		const massageOpen = screen.getByText(`open ${(new Date("2024-03-23T03:00:00.000+00:00")).toString()}`)
		const massageClose = screen.getByText(`close ${(new Date("2024-03-23T15:00:00.000+00:00")).toString()}`)
		//Assert
		expect(massageShopName).toBeInTheDocument();
		expect(massageShopAddress).toBeInTheDocument();
		expect(massageShopTel).toBeInTheDocument();
		expect(massageOpen).toBeInTheDocument();
		expect(massageClose).toBeInTheDocument();
	});
});
