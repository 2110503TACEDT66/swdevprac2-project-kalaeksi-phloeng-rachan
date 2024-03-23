import Link from "next/link";

export default function TopMenuItem ( { title, icon, pageRef } : { title:string, icon:string, pageRef:string } ) {
    return (
        <Link href={pageRef} className="w-fit text-[24px] text-center font-bold flex mt-auto mb-auto ml-4 mr-4">
            <i className="material-icons text-[24px] m-auto mr-2" >{icon}</i> 
            {title}
        </Link>
    );
}