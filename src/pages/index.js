import Head from 'next/head'
import Layout from '../components/pages/Layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>{process.env.SITE_NAME}</title>
            </Head>
            <Layout>
                <div className='grid'>
                  <h1>No homework</h1>
                </div>
            </Layout>
        </>
    )
}