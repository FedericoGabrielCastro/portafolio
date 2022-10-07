import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-10 lg:px-50 sm:px-20 md:px-45'>
      <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl'>
        <Navbar /> 
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp