import { CgMenuGridO } from "react-icons/cg"


const Navbar = () => {
    return(
        <nav className="navbar flex justify-end items-center">
            <ul className="flex items-center">
                <li className="font-13">Gmail</li>
                <li className="font-13">Images</li>
                <li className="">
                    <CgMenuGridO className="icon-size text-dray-dark"/>
                </li>
                <li className="">
                    <button className="App-button">
                        Sign In
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;