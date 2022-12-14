import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <title>Federico Castro</title>
                <link rel='shortcut icon' href='/img/avatar.jpeg'/>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel='preconnect' href='https://fonts.gstatic.com'/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className='bg-gradient-to-r from-green to-blue-400 dark:from-slate-800 dark:to-slate-700 '>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        ) 
    }
}

export default MyDocument