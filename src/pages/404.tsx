import Link from 'next/link'

const error404 = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-black dark:text-white'>404 - Page Not Found </h1>
            <Link href="/">
                <a className='text-black dark:text-white'>
                    Go back home
                </a>
            </Link>
        </div>
    )
}

export default error404