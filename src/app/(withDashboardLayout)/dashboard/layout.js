import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>bashboard header</h1>
      {children}
      <h1>bashboard footer</h1>
    </div>
  );
};

export default DashboardLayout;
