import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTask } from '../components/customHooks/useTask'
import Card from '../components/molecules/Card'

function Home() {
    const { push } = useRouter()
    const { tasks } = useTask()

    return (
        <div>
            <header>
                <span>{tasks.length} task</span>
                <Link href="/new">
                    <a>Create new Task</a>
                </Link>
            </header>
            <hr />
            <main>
                {tasks.length === 0 ? <h1>No hay tareas</h1> : (
                    tasks.map((task, index) =>
                        <Card key={task.id} index={index + 1} title={task.title} description={task.description} onClick={() => push(`/edit/${task.id}`)} />
                    )
                )
                }
            </main>
        </div>
    )
}

export default Home