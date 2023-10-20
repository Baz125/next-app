"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = {
      name: name,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
    };

    password !== confirmPassword
      ? alert("password and confirm password fields do not match")
      : fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.ok) {
            alert("Signup successful");
            router.push("/api/auth/signin");
          } else {
            alert("Signup failed");
          }
        });
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen ">
      <section className="flex-1 flex items-center justify-center">
        <div className="absolute top-4 left-4">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>

        <h1 className="text-6xl text-slate font-bold transition-transform transform hover:scale-150 duration duration-1000 ease-in-out">
          Next App
        </h1>
      </section>

      <section className="flex-1 flex items-center justify-center md:item-start overflow-y-auto p-20">
        <div className="p-6 md:p-12 rounded-lg shadow-xl max-w-lg bg-gray-200">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to create an account
            </h2>
          </div>

          <div className="mt-10 sm:sx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6 action='#'"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    autoComplete="new-password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
