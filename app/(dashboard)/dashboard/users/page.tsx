import Link from "next/link";

export default function Users() {
    return (
        <div>
            <h1>Users</h1>

            <ul className="flex flex-col gap-2">
            <li><Link href="/dashboard/users/1">John Doe</Link></li>
            <li><Link href="/dashboard/users/2">Jane Doe</Link></li>
            <li><Link href="/dashboard/users/3">Jeffrey Doe</Link></li>
            <li><Link href="/dashboard/users/4">Lilliane Doe</Link></li>
            <li><Link href="/dashboard/users/5">Lisanna Doe</Link></li> 
            </ul>
        </div>
    );
}