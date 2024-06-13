import Link from "next/link";


export default function Home() {
  const pdfUrl = "https://intech-review3lts.rivervalleytechnologies.in/storage/uploads/acrt/RESP/1254/acrt-RESP-1718023022.pdf"
  return (
    <main className=" w-screen h-screen flex justify-center items-center">
      <embed
        src={pdfUrl}
        width="100%"
        height="750px"
        type="application/pdf"
        style={{ border: 'none' }}
      />
    </main>
  )
}
