import React from 'react';
import { useSelector } from 'react-redux';
import UpdateStudentDetails from "../pages/main_pages/UpdateStudentDetails";
import ViewStudentDatabase from "../pages/main_pages/ViewStudentDatabase";
import DeleteStudentDetails from "../pages/main_pages/DeleteStudentDetails";
import AddStudentDetails from "../pages/main_pages/AddStudentDetails";

const Content = () => {
    const selectedItem = useSelector((state) => state.sidebar.selectedItem);  // Access selectedItem from Redux

    const renderContent = () => {
        switch (selectedItem) {
            case 'Add Student Details':
                return <AddStudentDetails/>
            case 'Delete Student Details':
                return <DeleteStudentDetails/>;
            case 'Update Student Details':
                return <UpdateStudentDetails/>;
            case 'View Student Database':
                return <ViewStudentDatabase/>;
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
