import Link from "next/link";


export default function Home() {
  const pdfUrl = "https://intech-review3lts.rivervalleytechnologies.in/storage/uploads/acrt/RESP/1254/acrt-RESP-1718023022.pdf"
  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
  return (
    <main className=" w-screen h-screen flex justify-center items-center">
    <div>03-08-2025 </div>
     <a href="https://docs.google.com/presentation/d/11RN2zIDuBke_ZBXZ5yrpAAx00TXgSPhz8nxXa54i4aE/edit?slide=id.g37415c0a81b_0_119#slide=id.g37415c0a81b_0_119">click</a>
    </main>
  )
}
