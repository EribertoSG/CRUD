import { useRouter } from 'next/router'
import { useTask } from '../components/customHooks/useTask'
import Card from '../components/molecules/Card'
import Layout from '../components/pages/layout'

function Home() {
    const { push } = useRouter()
    const { tasks, deleteTask } = useTask()

    const buttonDelete = (e, id) => {
        e.stopPropagation()
        const question = confirm('Estas seguro de querer borrar esta tarea?')
        if (question) {
            deleteTask(id)
        }else{
            alert('La tarea se conservará')
        }
    }

    return (
        <Layout>
            <div className='grid'>
                {tasks.length === 0 ? <h1>No hay tareas</h1> : (
                    tasks.map((task, index) =>
                        <Card
                            key={task.id}
                            index={index + 1}
                            title={task.title}
                            description={task.description}
                            onClick={() => push(`/edit/${task.id}`)}
                            onDelete={e => buttonDelete(e, task.id)}
                        />
                    )
                )
                }
            </div>
        </Layout>
    )
}

export default Home