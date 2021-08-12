
const Footer = () => {
    return(
        <footer className="footer">
            <p className="footer-header">Nigeria</p>
            <p className="text-center footer-14">Carbon neutral since 2007</p>
            <div className="container flex justify-between footer-14">
                <ul className="flex">
                    <li>About</li>
                    <li className="px-4">Advertising</li>
                    <li className="px-4">Business</li>
                    <li>How Search Works</li>
                </ul>
                <ul className="flex">
                    <li>Privacy</li>
                    <li className="px-4">Terms</li>
                    <li>Settings</li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;