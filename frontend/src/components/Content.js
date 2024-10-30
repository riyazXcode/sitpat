import React from 'react';
import { useSelector } from 'react-redux';

const Content = () => {
    const selectedItem = useSelector((state) => state.sidebar.selectedItem);  // Access selectedItem from Redux

    const renderContent = () => {
        switch (selectedItem) {
            case 'Add Student Details':
                return <div>Add Student Details Form</div>;
            case 'Delete Student Details':
                return <div>Delete Student Details Content</div>;
            case 'Update Student Details':
                return <div>Update Student Details Form</div>;
            case 'View Student Database':
                return <div>View Student Database Content</div>;
            case 'Add Placement Training':
                return <div>Add Placement Training Form</div>;
            case 'Delete Placement Training':
                return <div>Delete Placement Training Content</div>;
            case 'Update Placement Training':
                return <div>Update Placement Training Form</div>;
            case 'View Placement Database':
                return <div>View Placement Database Content</div>;
            default:
                return <div>Select an option from the sidebar</div>;
        }
    };

    return <div className="content">{renderContent()}</div>;
};

export default Content;
