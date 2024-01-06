import React, { useState } from "react";

const TabId = () => {
  const [Tabs, setTabs] = useState("tab1");
  function changetab(tab) {
    setTabs(tab);
  }
  return (
    <div>
      <div>
        <button onClick={() => changetab("tab1")} className={`${Tabs === "tab1" && "active"} m-5`}>  tab1</button>
        <button onClick={() => changetab("tab2")} className={`${Tabs === "tab2" && "active"} m-5`}> tab2 </button>
        <button onClick={() => changetab("tab3")} className={`${Tabs === "tab3" && "active"} m-5`}>  tab3 </button>
        {Tabs === "tab1" && <div>content1</div>}
        {Tabs === "tab2" && <div>content2</div>}
        {Tabs === "tab3" && <div>content3</div>}
      </div>
    </div>
  );
};

export default TabId;
