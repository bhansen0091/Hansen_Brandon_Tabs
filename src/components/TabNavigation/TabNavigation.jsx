import React from 'react';

const TabNavigation = ({key, idx, tabHeader, tabContent, setContent, activeTab, setActive}) => {
    return (
        <div className="btn-group">
            <button type="button" 
                className={
                    setActive === idx ?
                    "nav-link active":
                    "nav-link"
                }
                onClick={(e) => {
                    setContent(tabContent);
                    activeTab(idx);
                }}
            >{tabHeader}
            </button>
        </div>
    );
}

export default TabNavigation;