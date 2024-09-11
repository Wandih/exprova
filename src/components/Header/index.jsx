import './styles.css'
import { Link } from 'react-router-dom'

export default function Header (){
    return (

    <>

    <header>
        <h1>Página React</h1>
    

    <nav className='menu'>
        <ul id='uli'>
            <Link to='/'>
            <li id='lista'>Home</li>
            </Link>

            <Link to='/Cadastro'>
            <li id='lista'>Cadastro</li>
            </Link>
        </ul>
    </nav>
    
    </header>
    </>
    )
}