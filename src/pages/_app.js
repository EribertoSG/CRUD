import 'normalize.css'
import { TaskProvider } from '../components/context/taskContext'

function myApp({ Component, pageProps }) {
    return (
        <TaskProvider>
            <Component {...pageProps} />
        </TaskProvider>
    )
}

export default myApp