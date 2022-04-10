import 'normalize.css'
import '../scss/main.scss'
import Navigation from '../components/organisms/Navigation'
import { TaskProvider } from '../components/context/taskContext'

export default function MyApp({ Component, pageProps }) {
    return (
        <TaskProvider>
            <Navigation />
            <Component {...pageProps} />
        </TaskProvider>
    )
}