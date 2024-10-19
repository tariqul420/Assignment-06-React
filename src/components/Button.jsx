import { useEffect, useState } from "react"
import PropTypes from 'prop-types';

function Button() {
    const [button, setButton] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/peddy/categories')
            .then(response => response.json())
            .then(json => setButton(json.categories))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                button.map((btn) => <DisplayBtn key={btn.id} btn={btn}></DisplayBtn>)
            }
        </>
    )
};

function DisplayBtn({ btn }) {
    const { category, category_icon } = btn
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-12">
                <button className="flex gap-4 items-center justify-center border border-solid border-[#0e7a8126] rounded-2xl w-[15rem] h-[5rem] mx-auto">
                    <img src={category_icon}></img>
                    <p className="font-inter font-bold text-color-primary text-2xl">{category}</p>
                </button>
            </div>
        </>
    )
};

DisplayBtn.propTypes = {
    btn: PropTypes.shape({
        category: PropTypes.string.isRequired,
        category_icon: PropTypes.string.isRequired,
    }).isRequired,
};

export default Button