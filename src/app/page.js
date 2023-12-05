import Link from "next/link";


export default function Home() {
  return (
    <main className=" w-screen h-screen flex justify-center items-center">
      <Link href="/admin/dashboard" className="p-3 bg-slate-800 rounded text-white">Admin dashboard</Link>
    </main>
  )
}
