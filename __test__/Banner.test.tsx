import { render, screen } from "@testing-library/react";
import Banner from "@/components/Banner"
import { userEvent } from "@testing-library/user-event";

describe('Banner', ()=>{
    it('should have these element', ()=>{
        render(<Banner/>);
        const bannerContainer = screen.getByTestId("banner-container");
        const leftImage = screen.getByTestId("left-image");
        const leftArrow = screen.getByTestId("left-arrow");
        const middleImage = screen.getByTestId("middle-image");
        const rightArrow = screen.getByTestId("right-arrow");
        const rightImage = screen.getByTestId("right-image");
        
        expect(bannerContainer).toBeInTheDocument();
        expect(leftImage).toBeInTheDocument();
        expect(leftArrow).toBeInTheDocument();
        expect(middleImage).toBeInTheDocument();
        expect(rightArrow).toBeInTheDocument();
        expect(rightImage).toBeInTheDocument();
    })

    it('should function right when button is clicked', async()=>{
        render(<Banner/>);
        const leftImage = screen.getByTestId("left-image") as HTMLImageElement;
        const leftArrow = screen.getByTestId("left-arrow");
        const middleImage = screen.getByTestId("middle-image") as HTMLImageElement;
        const rightArrow = screen.getByTestId("right-arrow");
        const rightImage = screen.getByTestId("right-image") as HTMLImageElement;

        expect(leftImage).toHaveStyle({"width":450});
        expect(middleImage).toHaveStyle({"width":600});
        expect(rightImage).toHaveStyle({"width":450});
        
        await userEvent.click(leftArrow);
        expect(leftImage).toHaveStyle({"width":600});
        expect(middleImage).toHaveStyle({"width":450});
        expect(rightImage).toHaveStyle({"width":450});

        await userEvent.click(leftArrow);
        expect(leftImage).toHaveStyle({"width":600});
        expect(middleImage).toHaveStyle({"width":450});
        expect(rightImage).toHaveStyle({"width":450});

        await userEvent.click(rightArrow);
        expect(leftImage).toHaveStyle({"width":450});
        expect(middleImage).toHaveStyle({"width":600});
        expect(rightImage).toHaveStyle({"width":450});

        await userEvent.click(rightArrow);
        expect(leftImage).toHaveStyle({"width":450});
        expect(middleImage).toHaveStyle({"width":450});
        expect(rightImage).toHaveStyle({"width":600});

        await userEvent.click(rightArrow);
        expect(leftImage).toHaveStyle({"width":450});
        expect(middleImage).toHaveStyle({"width":450});
        expect(rightImage).toHaveStyle({"width":600});

        await userEvent.click(leftArrow);
        expect(leftImage).toHaveStyle({"width":450});
        expect(middleImage).toHaveStyle({"width":600});
        expect(rightImage).toHaveStyle({"width":450});
    })
})

/**
 * it('should have these element', ()=>{
        render(<Banner/>);
        const bannerContainer = screen.getByTestId("banner-container");
        const leftImage = screen.getByTestId("left-image");
        const leftArrow = screen.getByTestId("left-arrow");
        const middleImage = screen.getByTestId("middle-image");
        const rightArrow = screen.getByTestId("right-arrow");
        const rightImage = screen.getByTestId("right-image");
        
        expect(bannerContainer).toBeInTheDocument();
        expect(leftImage).toBeInTheDocument();
        expect(leftArrow).toBeInTheDocument();
        expect(middleImage).toBeInTheDocument();
        expect(rightArrow).toBeInTheDocument();
        expect(rightImage).toBeInTheDocument();
    })
 */