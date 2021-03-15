import TabNavigation from './components/TabNavigation/TabNavigation';
import TabContent from './components/TabContent/TabContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

const App = () => {

    const tabs = [
      {header: "Tab Header 1", content: "Some content for tab 1."},
      {header: "Tab Header 2", content: "Some content for tab 2."},
      {header: "Tab Header 3", content: "Some content for tab 3."}
    ];

    const [content, setContent] = useState("");
    const [active, setActive] = useState("");

  return (
    <div className="App">
      <div className="nav nav-tabs justify-content-center">
        {
          tabs.map((tb, i) => (
            <TabNavigation 
              key = {i}
              idx = {i}
              tabHeader = {tb.header}
              tabContent = {tb.content}
              setContent = {(e) => setContent(e)}
              activeTab = {(e) => setActive(e)}
              setActive = {active}
            />
          ))
        }
      </div>
      <div className="container border border-top-0 py-4">
        <TabContent 
          tabContent = {content}
        />
      </div>
    </div>
  );
}

export default App;
