import NavBar from "./NavBar"
import Banner from "../images/pet.webp"

function Header() {
    return (
        <>
            <NavBar></NavBar>
            <header className="mt-12 flex items-center justify-center flex-col">
                <p className="text-color-finely font-bold text-2xl text-center">Bringing Families Together ❤️‍🔥</p>
                <h1 className="font-black text-color-primary text-6xl text-center mt-8">
                    Your Path to Adoption <br className="hidden md:block" />
                    Starts Here
                </h1>
                <p className="text-center mt-6 text-color-secondary font-semibold">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking <br className="hidden md:block" />
                    at its layout. The point of using Lorem Ipsum is that it has a.
                </p>
                <a href="#main-container"><button className="button mt-8">View More</button></a>
                <img src={Banner} className="mt-12" alt="Banner" />
            </header>
        </>
    )
};
export default Header