import { Link } from "react-router";

const Slide = ({ imges, title, detile, to, button }) => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${imges})`,}}>
            <div className="hero-overlay"></div>
            <div className="text-neutral-content w-full">
                <div className=" container mx-auto pl-15">
                    <h1 className="mb-4 text-xl lg:text-5xl font-bold">{title}</h1>
                    <p className="mb-10 w-1/2 text-base lg:text-lg ">{detile}</p>
                    <Link to={to}>
                        <button className="btn rounded-3xl btn-primary btn-lg px-16">{button}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;