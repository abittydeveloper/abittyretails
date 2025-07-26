import Link from "next/link";


export default function Home() {
  const pdfUrl = "https://intech-review3lts.rivervalleytechnologies.in/storage/uploads/acrt/RESP/1254/acrt-RESP-1718023022.pdf"
  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
  return (
    <main className=" w-screen h-screen flex justify-center items-center">
    <div>Hello from abitty</div>
     <a href="https://docs.google.com/presentation/d/1adHtN6dbbqH4pbiUvE6ZvS-bgtyaWe0HAe7fdmU_paI/edit?usp=sharing">click</a>
    </main>
  )
}
