import Logo from "../images/logo.webp"
function NavBar() {
    return (
        <nav className="flex items-center justify-between w-11/12 mx-auto mt-4">
            <div className="flex gap-4">
                <img src={Logo} alt="Logo" />
                <h2 className="text-color-primary text-3xl font-black">Peddy</h2>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-6 text-base text-color-secondary">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <p className="w-8 h-8 flex items-center justify-center bg-btn-primary rounded-full cursor-pointer">
                    <i className="fa-regular fa-user text-white"></i>
                </p>
            </div>
        </nav>
    )
};
export default NavBar