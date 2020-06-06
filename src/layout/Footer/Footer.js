import React, {Fragment} from 'react'
import './footer.scss'

const Footer = () => {

    let year = new Date().getFullYear()

    return(
        <footer>
            <p className="text-center">&copy; {year} Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer