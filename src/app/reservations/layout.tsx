export default function ReservationLayout ( {children}: {children:React.ReactNode} ) {
    return (
        <div className="flex p-[10px]">
            {/* <ReservationMenu/> */}
            {children}
        </div>
    );
}