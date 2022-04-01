import { useRouter } from "next/router"
import Link from "next/link"

const Nav = () => {
    const router = useRouter()
    console.log(router.pathname)

    return (
        <header className="header">
            <div className="header__nav">
                <div className="header__nav-left">
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                </div>
                <div className="header__nav-rigth">
                    {router.pathname === '/new' || router.pathname === '/edit/[id]'
                        ? ''
                        : <button onClick={() => router.push('/new')} className="button">Create New Task</button>
                    }
                </div>
            </div>
        </header>
    )
}

export default Nav


