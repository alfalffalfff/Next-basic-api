import './globals.css'
import Sidebar from './component/Sidebar'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-bage-50 mx-auto flex h-full'>
        <div>
          <Sidebar />
        </div>
        {/* Layout UI */}
        <main className="container mx-auto min-h-max" >{children}</main>
      </body>
    </html>

  )
}