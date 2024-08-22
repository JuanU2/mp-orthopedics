import { Link } from 'react-router-dom'
import signin from '../photos/log-in.png'
import loggedin from '../photos/user.png'
import "../cssStyles/loginMenuOption.css"
import { getUser } from '@/Layout'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from './loadingSpinner'

async function signOut() {
    try {
        const userId = localStorage.getItem("auth");
        localStorage.setItem("auth", "none");
        const response = await axios.post('http://localhost:3000/users/logout', {userId}, {withCredentials: true});
        if (response.status === 200) {
            return true;
        }
        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
    finally {
        window.location.href = "/";
    }
}


function LoginMenuOption() {
    const authItem = localStorage.getItem("auth");
    const userId: number = (authItem !== "none" 
                    && authItem !== null) ? parseInt(authItem) : -1
    const {data, isLoading} = useQuery({queryKey: ['getUser']
    , queryFn: () => getUser(userId)})
    if (isLoading) {
        return (
            <LoadingSpinner/>
        );
    }
    if ((userId !== -1) && data) {
        if (data.userRole === "ADMIN") {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <img src={loggedin} style={{height: "8vh"}}/>
                    </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <Link to='/password-change'>Zmena Hesla</Link>
                            </DropdownMenuLabel>
                        <DropdownMenuLabel className='clickable'>
                            <Link to='/admin/promotion'>Promovať na admina</Link>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='clickable' onClick={signOut}>Odhlasit sa</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
        return (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <img src={loggedin} style={{height: "8vh"}}/>
                </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuLabel>
                            <Link to='/password-change'>Zmena Hesla</Link>
                            </DropdownMenuLabel>
                    <DropdownMenuLabel className='clickable'>
                        <Link to='/reservation/my'>Moje rezervácie</Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='clickable' onClick={signOut}>Odhlasit sa</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
  return (
    <Link className="navbar__menu__option" to='/login'>
        <img className="navbar__menu__option__icon" src={signin}/>
    </Link>
  );
}

export default LoginMenuOption