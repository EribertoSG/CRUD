import { useRouter } from "next/router"
import Link from "next/link"

const Nav = () => {
    const router = useRouter()
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
                        ?
                        ''
                        :
                        <button onClick={() => router.push('/new')} className="button flex">
                            <span>Create New Task</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="plus"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                        </button>
                    }
                </div>
            </div>
        </header>
    )
}

export default Nav


