import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <img
          src="https://illustrations.popsy.co/red/falling.svg"
          alt="Error illustration"
          className="w-64 h-64 mx-auto mb-6"
        />
        <p className="text-xl text-gray-700 mb-4">
          {error?.message ||
            "Sorry, the page you're looking for cannot be found."}
        </p>
        <p className="text-gray-500 mb-6">
          Error status: {error?.status || 404}
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
