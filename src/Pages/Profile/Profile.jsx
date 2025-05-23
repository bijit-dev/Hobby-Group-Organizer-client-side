import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
// import { toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.init";
import Swal from "sweetalert2";


const Profile = () => {
    const { user } = use(AuthContext);
    const Navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.PhotoUrl.value;

        // update user profile
        const profile = {
            displayName: name,
            photoURL: photo,
        }
        updateProfile(auth.currentUser, profile)
            .then(() => {
                // Profile updated!
                Swal.fire({
                    title: "Update successful!",
                    icon: "success",
                    draggable: true
                });

                Navigate("/profile")
            }).catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    title: errorMessage,
                    icon: "error",
                    draggable: true
                });
            });
    }



    return (
        <div className=" container px-5 mx-auto rounded-2xl overflow-hidden shadow-xl bg-white my-12">
            {/* <Helmet>
                <title>Profile</title>
            </Helmet> */}

            <div className="h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl  relative">
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-50 h-50 rounded-full border-4 border-white shadow-lg"
                    />
                </div>
            </div>
            <div className="pt-20 pb-8 px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800">{user?.displayName}</h2>
                <p className="mt-1 text-xl text-gray-600">Email: {user?.email}</p>

                {/* form */}
                <div className="border border-gray-500 my-10 p-10 rounded-2xl shadow">

                    <form onSubmit={handleUpdate} className="space-y-5 ">
                        {/* Name field */}

                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            // defaultValue={user?.name}
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                            required />

                        {/* photoURL field */}
                        <label className="block text-gray-700 font-medium mb-1">Photo</label>
                        <input
                            type="text"
                            // defaultValue={user?.name}
                            name="PhotoUrl"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your PhotoUrl"
                            required />

                        {/* btn  */}
                        <button type="submit" className="px-5 my-5 py-2 text-sm font-semibold text-green-600 border border-green-600 rounded-full hover:bg-green-50 transition">Update Profile</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Profile;