import 'normalize.css'
import { TaskProvider } from '../context/taskContext'

function myApp({ Component, pageProps }) {
    return (
        <TaskProvider>
            <Component {...pageProps} />
        </TaskProvider>
    )
}

export default myApp