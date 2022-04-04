export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <h1>I´m every pages</h1>
            <Component {...pageProps} />
        </>
    )
}