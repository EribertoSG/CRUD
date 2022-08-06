import 'normalize.css'
import '../scss/main.scss'
import Navigation from '../components/organisms/Navigation'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
        </>
    )
}