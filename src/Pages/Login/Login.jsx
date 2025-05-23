import { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn, googleSignIn } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const Navigate = useNavigate();
    const emailRef = useRef();
    const location = useLocation();

    // Log in 
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // login 
        signIn(email, password).then(() => {
            Navigate(location?.state || '/')            
            Swal.fire({
                title: "Login successfully!",
                icon: "success",
                draggable: true
            });
        }).catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                title: errorMessage,
                icon: "error",
                draggable: true
            });
        });
    }

    // google login 
    const handleGoogleLogin = () => {
        googleSignIn().then(() => {
            Navigate(location?.state || '/')
            Swal.fire({
                title: "Login successfully!",
                icon: "success",
                draggable: true
            });

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
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-15">
            <div className="card-body ">
            <h3 className="text-3xl text-center font-bold mb-6">Login now!</h3>
                
                <form onSubmit={handleLogin} className="fieldset">
                    {/* email input */}
                    <label className="label">Email</label>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" name='email' ref={emailRef} placeholder="mail@site.com" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>

                    {/* password input  */}
                    <label className="label">Password</label>
                    <label className="input validator relative">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            required
                            placeholder="Password"
                            minLength="8"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />

                        <p onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-2 right-2 bg-transparent border-0 hover:border hover:border-red-500'>{showPassword ? <LuEyeOff /> : <LuEye />}</p>
                    </label>

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <label className=' lable mt-2'> <input type="checkbox" name="terms" className="checkbox" required /> Accept Terms and Conditions</label>

                    <button className="btn btn-neutral mt-4 uppercase">Login</button>
                </form>
                <p>Don't have an account? <Link to='/register' className='link link-primary'>Register</Link></p>

                {/*.............. google login.......... */}
                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>

        </div>
    );
};

export default Login;