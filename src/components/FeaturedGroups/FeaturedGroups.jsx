import FeaturedGroupsCard from "./FeaturedGroupsCard";

const FeaturedGroups = ({ data }) => {
    const newData = data.slice(0, 6);

    return (
        <section className=" pb-12 rounded-lg">
            <div className=" container mx-auto px-5 my-12 rounded-lg">
                <div className="text-center py-8">
                    <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-accent">Featured Groups</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                    {
                        newData.map(group => <FeaturedGroupsCard key={group._id} group={group} />)}
                </div>
            </div>
        </section>
    );
};

export default FeaturedGroups;