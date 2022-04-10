import { useRouter } from "next/router"
import Link from 'next/link'

const Navigation = () => {
    const { push } = useRouter()

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__rigth">
                        <Link href='/'>
                            <a>Logo</a>
                        </Link>
                    </div>
                    <div className="header__letf">
                        <button className="button" onClick={() => push('/new')}>Create New Task</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigation


