import React, { useState } from "react";
import Form from "./Form";

const ReferButton = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div
        class=" bg-blue-500 mt-5 p-1.5 flex justify-center align-middle text-slate-200 pr-3 pl-3 rounded w-5/12 font-semibold text-sm"
        onClick={() => setShowForm(true)}
      >
        Refer Now
      </div>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default ReferButton;
