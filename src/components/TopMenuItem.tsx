import Link from "next/link";

export default function TopMenuItem ( { title, icon, pageRef } : { title:string, icon:string, pageRef:string } ) {
    return (
        <Link href={pageRef} className="inline-block whitespace-nowrap text-2xl text-center flex my-auto mx-4">
            <i className="material-icons text-2xl m-auto mr-2" >{icon}</i> 
            {title}
        </Link>
    );
}