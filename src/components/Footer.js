
const Footer = () => {
    return(
        <footer className="footer">
            <p className="footer-header">Nigeria</p>
            <p className="container text-center footer-14 pt-2 pb-1">Carbon neutral since 2007</p>
            <div className="container flex lg:justify-between justify-center lg:flex-no-wrap md:flex-no-wrap flex-wrap footer-14">
                <ul className="flex lg:flex-no-wrap md:flex-no-wrap flex-wrap lg:my-0 md:my-0 my-4">
                    <li>About</li>
                    <li className="px-5">Advertising</li>
                    <li className="p">Business</li>
                </ul>
                <ul className="flex lg:flex-no-wrap md:flex-no-wrap flex-wrap">
                    <li>Privacy</li>
                    <li className="px-5">Terms</li>
                    <li>Settings</li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;