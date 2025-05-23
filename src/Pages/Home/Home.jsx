import { useLoaderData } from 'react-router';
import Contact from '../../components/Contact/Contact';
import FeaturedGroups from '../../components/FeaturedGroups/FeaturedGroups';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <section className=''>
            <Slider></Slider>
            <FeaturedGroups data={data} />

            <Contact/>
        </section>
    );
};

export default Home;