import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";


function Auth() {

    const navigate = useNavigate();

    const [mode, setMode] = useState("signup");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const [error, setError] = useState("");
    const {setCurrUser} = useAuth();

    const handleAuth = () => {
        if(mode === "signup") {
            setMode("login");
        } else {
            setMode("signup");
        }
    }

    function registerUser(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find((user) => user.email === email);

        if (userExists) {
            return {
                success: false,
                message: "User already exists",
            };
        }

        const newUser = {
            email,
            password,
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        setUsers(users);

        return {
            success: true,
            message: "You signed up successfully",
        };
    }

    function loginUser(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find((user) => user.email === email);

        if (!user) {
            return {
                success: false,
                message: "User not found",
            };
        }

        if (user.password !== password) {
            return {
                success: false,
                message: "Incorrect password",
            };
        }

        localStorage.setItem("currUser", JSON.stringify(user));

        setCurrUser(user);

        return {
            success: true,
            message: "Login successful",
        };
    }

    function onSubmit(data) {
        setError("");

        if (mode === "signup") {
            const result = registerUser(data.email, data.password);

            if (!result.success) {
                setError(result.message);
                return;
            }

            toast(result.message);
            setMode("login");
        } else {
            const result = loginUser(data.email, data.password);

            console.log(result)

            if (!result.success) {
                setError(result.message);
                return;
            }


            toast(result.message);
            navigate("/");
        }
    }

    return (
        <div className="px-4 py-20">
            <div className="shadow-md max-w-2xl mx-auto p-6 pt-10 rounded-2xl flex flex-col gap-4 justify-center bg-white">
                <div className="text-2xl font-semibold text-center py-4">{mode === "signup" ? "Sign Up to" : "Login to"} <span className="text-purple-950">EcomStore</span></div>
                {
                    error &&
                    <div className="bg-red-200 p-4 rounded-lg">
                        {error}
                    </div>
                }
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <label htmlFor="email" className="text-lg font-semibold">Email</label>
                        </div>
                        <div className="mt-1">
                            <input type="email" placeholder="johndoe@gmail.com" className="text-lg bg-gray-100 p-2 px-4 w-full rounded-md" {...register("email", { required: true })} />
                        </div>
                    </div>
                    <p className="text-red-500">{errors.email && "Email is required"}</p>
                    <div className="mt-2">
                        <div>
                            <label htmlFor="password" className="text-lg font-semibold">Password</label>
                        </div>
                        <div className="mt-1">
                            <input
                                type="password"
                                placeholder="password"
                                autoComplete="off"
                                className="text-lg bg-gray-100 p-2 px-4 w-full rounded-md"
                                {...register("password", {
                                    required: true, minLength: {
                                        value: 6,
                                        message: "Password should contain atleast 6 characters",
                                    }
                                })} />
                        </div>
                    </div>
                    <p className="text-red-500">{errors.password && errors.password.message}</p>
                    <div className="mt-8 text-center">
                        <button className="bg-purple-700 text-lg p-2 px-8 text-white font-bold rounded-lg">{mode === "signup" ? "Sign Up" : "Log In"}</button>
                    </div>
                </form>
                <p className="text-gray-600 text-center">{mode === "signup" ? "Already have an account?" : "Dont't have an account?"} <span onClick={handleAuth} className="text-blue-600 underline cursor-pointer">{mode === "signup" ? "Login" : "Signup"}</span></p>
            </div>
        </div>
    )
}

export default Auth;