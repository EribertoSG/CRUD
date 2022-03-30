import { useTask } from '../components/customHooks/useTask'

function Home() {
    const { tasks } = useTask()

    return (
        <div>
            <header>
                <span>{tasks.length} task</span>
            </header>
            <main>
                <h1>Main</h1>
            </main>
        </div>
    )
}

export default Home