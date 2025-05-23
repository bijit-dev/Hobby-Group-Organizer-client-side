import { Typewriter } from "react-simple-typewriter";
import FeaturedGroupsCard from "./FeaturedGroupsCard";

const FeaturedGroups = ({ data }) => {
    const newData = data.filter(group => {
        const startDate = new Date(group.startDate);
        const today = new Date();
        return startDate >= today;
    }).slice(0, 6);

    return (
        <section className="pb-12 rounded-lg">
            <div className=" container mx-auto px-5 my-12 rounded-lg">
                <div className="text-center py-8">
                    <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-accent">Featured Groups</h1>
                    
                    <span style={{ color: 'green', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        {/* Typewriter effect for the text */}
                        <Typewriter
                            words={['Join us for an exciting journey of learning and growth!', 'Be a Part of Our Community', 'Connect with Like-Minded Individuals', 'Discover New Opportunities','Explore our featured groups and join the community.']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={90}
                            deleteSpeed={60}
                            delaySpeed={1000}
                        />
                    </span>
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