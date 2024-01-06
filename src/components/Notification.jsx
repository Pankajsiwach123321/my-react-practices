import React, { useEffect, useState } from "react";

const Notification = () => {
  const [count, updatecount] = useState(1);
  useEffect(() => {
    document.title = count;
    // return () => {
    //   second;
    // };
  }, [count]);
  return (
    <div>
      <div className="para">{count}</div>
      <button onClick={() => updatecount(count + 1)}>add</button>
    </div>
  );
};
export default Notification;