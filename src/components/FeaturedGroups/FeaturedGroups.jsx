import FeaturedGroupsCard from "./FeaturedGroupsCard";

const FeaturedGroups = ({ data }) => {

    return (
        <div className=" container mx-auto px-5 my-12">
            <div className="text-center py-8">
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-accent">Featured Groups</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(group => <FeaturedGroupsCard key={group._id} group={group} />)}
            </div>
        </div>
    );
};

export default FeaturedGroups;