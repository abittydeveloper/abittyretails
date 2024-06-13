import Link from "next/link";


export default function Home() {
  const pdfUrl = "https://intech-review3lts.rivervalleytechnologies.in/storage/uploads/acrt/RESP/1254/acrt-RESP-1718023022.pdf"
  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
  return (
    <main className=" w-screen h-screen flex justify-center items-center">
    <div>Hello from abitty</div>
      <iframe
        src={googleDocsViewerUrl}
        width="100%"
        height="750px"
        style={{ border: 'none' }}
        title="PDF Viewer"
      ></iframe>
    </main>
  )
}
