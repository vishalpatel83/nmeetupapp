import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import classes from "./MainNavigation.module.css"
import Favouritecontext, { Favouritecontexprovider } from '../../store/favourite-contex';

export const MainNavigation = () => {
    const Favouritectx = useContext(Favouritecontext)
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>main navigation</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>allmeetup</Link>
                        </li>
                        <li>
                          <Link to="/favourite">Favourite
                          <span className={classes.badge}>{Favouritectx.totalfavourites}</span>
                          </Link>
                        </li>
                        <li>
                            <Link to="/newmwwtups">newmwwtsups</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

