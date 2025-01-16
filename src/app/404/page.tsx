import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl">URL Not Found</p>
    </div>
  );
};

export default NotFoundPage;
