import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Card() {
    const [data, setData] = useState([]);
    const [likedPets, setLikedPets] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(response => response.json())
            .then(json => setData(json.pets))
            .catch(err => console.log(err))
    }, []);

    const handleLike = (likedPet) => {
        setLikedPets((prevLikedPets) => [...prevLikedPets, likedPet]);
    };

    return (
        <>
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-4 mt-8">
                <div id="all-animal-container" className="w-full md:w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.map((pet) => (
                            <AllCard 
                                key={pet.petId} 
                                data={pet} 
                                onLike={() => handleLike(pet)}
                            />
                        ))
                    }
                </div>

                <div className="w-full md:w-full lg:w-[30%] grid grid-cols-2 p-4 border border-solid border-[#1313131a] rounded-[12px] gap-4 content-start">
                    {
                        likedPets.map((pet) => (
                            <div key={pet.petId}>
                                <img className="rounded-[8px] w-full h-full" src={pet.image} alt={pet.pet_name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

function AllCard({ data, onLike }) {
    const { image, pet_name, breed, date_of_birth, gender, price } = data;

    return (
        <div>
            <div className="h-[180px] w-[280px]">
                <img className="rounded-[8px] w-full h-full" src={image} alt={pet_name} />
            </div>
            <div className="mt-3">
                <h3 className="font-inter font-bold text-xl text-color-primary">{pet_name}</h3>
                <p className="text-color-secondary font-semibold"><i className="fa-solid fa-layer-group"></i> Breed: {breed || "Not Available"}</p>
                <p className="text-color-secondary font-semibold"><i className="fa-regular fa-calendar-days"></i> Birth: {date_of_birth || "Not Available"}</p>
                <p className="text-color-secondary font-semibold"><i className="fa-solid fa-venus-mars"></i> Gender: {gender || "Not Available"}</p>
                <p className="text-color-secondary font-semibold"><i className="fa-solid fa-dollar-sign"></i> Price : {price ? `${price} $` : "Not Available"}</p>
            </div>
            <hr className="bg-[#1313131a] mt-2"></hr>
            <div className="mt-2 flex items-center justify-between">
                <button onClick={onLike} className="text-[18px] text-btn-primary px-5 lg:px-3 py-2 border border-solid border-[rgb(14, 122, 129, 0.15)] rounded-[8px] text-xl font-bold">
                    <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <button className="text-[18px] text-btn-primary px-5 lg:px-3 py-2 border border-solid border-[rgb(14, 122, 129, 0.15)] rounded-[8px] text-xl font-bold">
                    Adopt
                </button>
                <button className="text-[18px] text-btn-primary px-5 lg:px-3 py-2 border border-solid border-[rgb(14, 122, 129, 0.15)] rounded-[8px] text-xl font-bold">
                    Details
                </button>
            </div>
        </div>
    );
}

AllCard.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        pet_name: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        date_of_birth: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        petId: PropTypes.number.isRequired,
    }),
    onLike: PropTypes.func.isRequired,
};

export default Card;
