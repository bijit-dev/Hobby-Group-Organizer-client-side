import { Link } from "react-router";

const FeaturedGroupsCard = ({ group }) => {
    const { _id, name, Category, maxMembers, imageURL, startDate, description } = group;
    const sDate = new Date(startDate);
    const options1 = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedStartDate = sDate.toLocaleDateString('en-US', options1);

    const toDay = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = toDay.toLocaleDateString('en-US', options);

    if (formattedStartDate <= formattedDate) {
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
                        <p className="font-bold text-left ">Members: <span className="text-gray-500">{maxMembers}</span></p>
                        <p className="text-green-500 font-bold text-right">OnGoing</p>
                    </div>
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p className="text-lg font-medium">Category: <span className="text-gray-500">{Category}</span></p>
                    <p className="text-base font-medium">Description: <span className="text-gray-500">{description}</span></p>

                </div>
                <div className="px-6 pb-6">
                    <Link to={`/groupDetails/${_id}`}>
                        <button className="btn btn-primary w-full ">See More</button>
                    </Link>
                </div>
            </div>
        );
    }
};

export default FeaturedGroupsCard;