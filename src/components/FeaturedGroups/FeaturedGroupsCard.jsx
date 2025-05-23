import { Link } from "react-router";

const FeaturedGroupsCard = ({ group }) => {
    const { _id, name, Category, maxMembers, imageURL, startDate, description } = group;
    // const sDate = new Date(startDate);
    // const toDay = new Date();

    // if (sDate <= toDay) {
    // }
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className="w-full h-64">
                <img width="100%"
                    src={imageURL}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <div className="flex justify-between items-center w-full text-lg">
                    <p className="font-bold ">Members: <span className="text-gray-500">{maxMembers}</span></p>
                    <p className="font-bold text-right ">Date: <span className="text-gray-500">{startDate}</span></p>

                </div>
                <h2 className="card-title text-3xl">{name}</h2>
                <p className="text-lg font-medium">Category: <span className="text-gray-500">{Category}</span></p>
                <p className="text-base font-medium text-justify  leading-relaxed line-clamp-2">Description: <span className= "text-gray-500">{description}</span></p>
            </div>
            <div className="px-6 pb-6">
                <Link to={`/group/${_id}`}>
                    <button className="btn btn-primary w-full ">See More</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedGroupsCard;