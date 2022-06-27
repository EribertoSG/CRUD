import Head from 'next/head'
import { useRouter } from 'next/router'
import useTask from '../components/hooks/useTask'
import Card from '../components/molecules/card'
import Layout from '../components/pages/Layout'

export default function Home() {
    const { tasks, deleteTask } = useTask()
    const { push } = useRouter()
    return (
        <>
            <Head>
                <title>{process.env.SITE_NAME}</title>
            </Head>
            <Layout>
                <div className='grid'>
                    {tasks.length == 0
                        ? <h1 className='no-homework'>There is no homework</h1>
                        : tasks.map((t, index) => (
                            <Card
                                key={index + 1}
                                index={index + 1}
                                task={t}
                                onDelete={() => deleteTask(t.id)}
                                onEdit={() => push(`/edit/${t.id}`)}
                            />
                        ))}
                </div>
            </Layout>
        </>
    )
}