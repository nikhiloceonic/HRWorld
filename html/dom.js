import React, { useState } from 'react';
import './Tabs.css'; // Optional for styling

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Tab 1', content: 'This is the content of Tab 1.' },
    { title: 'Tab 2', content: 'This is the content of Tab 2.' },
    { title: 'Tab 3', content: 'This is the content of Tab 3.' },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;

