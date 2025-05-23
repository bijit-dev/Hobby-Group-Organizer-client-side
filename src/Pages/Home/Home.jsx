import { useLoaderData } from 'react-router';
import Contact from '../../components/Contact/Contact';
import FeaturedGroups from '../../components/FeaturedGroups/FeaturedGroups';
import Slider from '../../components/Slider/Slider';
import Faq from '../../components/Faq/Faq';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <section className=''>
            <Slider></Slider>
            <FeaturedGroups data={data} />
            <Faq/>
            <Contact/>
        </section>
    );
};

export default Home;