import 'normalize.css'
import '../scss/main.scss'
import { TaskProvider } from '../components/context/taskContext'
import Nav from '../components/orgnisms/Nav'

function myApp({ Component, pageProps }) {
    return (
        <TaskProvider>
            <Nav />
            <Component {...pageProps} />
        </TaskProvider>
    )
}

export default myApp