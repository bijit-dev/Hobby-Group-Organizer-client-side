import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";


const GroupDetails = () => {
    const initialGroups = useLoaderData();
    const { id } = useParams();
    const groupData = initialGroups?.find(e => e._id !== id);
    const { name, Category, meetingLocation, maxMembers, startDate, imageURL, description } = groupData;

    // join group hendle 
    const sDate = new Date(startDate);
    const options1 = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedStartDate = sDate.toLocaleDateString('en-US', options1);

    const toDay = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = toDay.toLocaleDateString('en-US', options);

    const handleJoin = () => {
        if (formattedStartDate >= formattedDate) {
            Swal.fire({
                icon: "success",
                title: "You have successfully joined the group",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Sorry, you cannot join this group as the date has passed.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="container mx-auto my-12 px-8">
            <section className="max-w-6xl mx-auto p-6 md:p-10">
                {/* <Helmet>
                    <title>Event {event?.name}</title>
                </Helmet> */}
                {/* Banner Image */}
                <div className="rounded-xl w-1/2 mx-auto overflow-hidden shadow mb-8">
                    <img src={imageURL} alt={name} className="w-full object-cover" />
                </div>

                {/* Title and Info */}
                <h1 className="text-3xl font-bold text-gray-800 my-8">{name}</h1>
                <h2 className="text-gray-500 mb-4"> Category: {Category}</h2>
                <p className="text-gray-500 mb-4">Start Date: {startDate}</p>
                <p className="text-gray-500 mb-4">Meeting Location: {meetingLocation}</p>
                <p className="text-gray-500 mb-4">Max Members:  {maxMembers}</p>

                {/* Description */}
                <div className="my-10">
                    <h2 className="text-xl font-semibold mb-2">Description :</h2>
                    <p className="text-gray-700">{description}</p>
                </div>


                <button onClick={handleJoin} className={`btn btn-primary`}>Join Group</button>
            </section>
            
        </div>
    );
};

export default GroupDetails;