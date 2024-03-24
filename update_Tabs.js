import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-links">
        <button
          className={`tab-link ${activeTab === 0 ? "active-link" : ""}`}
          onClick={() => onTabClick(0)}
        >
          Tab 1
        </button>
        <button
          className={`tab-link ${activeTab === 1 ? "active-link" : ""}`}
          onClick={() => onTabClick(1)}
        >
          Tab 2
        </button>
        <button
          className={`tab-link ${activeTab === 2 ? "active-link" : ""}`}
          onClick={() => onTabClick(2)}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-contents">
        <div
          className={`tab-content ${activeTab === 0 ? "active-tab" : ""}`}
          id="tab1"
        >
          Content for Tab 1
        </div>

