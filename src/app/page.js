import Link from "next/link";


export default function Home() {
  const pdfUrl = "https://intech-review3lts.rivervalleytechnologies.in/storage/uploads/acrt/RESP/1254/acrt-RESP-1718023022.pdf"
  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
  return (
    <main className=" w-screen h-screen flex justify-center items-center">
    <div>10-08-2025 </div>
     <a href="https://docs.google.com/presentation/d/17vqH3lozJkZpe0ElXJ5y6QrZe5WxV2FDpG6HtfrsIlc/edit?usp=sharing">click</a>
    </main>
  )
}
