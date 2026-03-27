import React, { useState } from "react";
import AddLinkForm from "../components/AddLinkForm";
import LinkTable from "../components/LinkTable";
import Modal from "../components/Modal";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleLinkCreated = (link) => {
    setModalData(link);
    setRefreshTrigger(prev => !prev);
  };

  const closeModal = () => setModalData(null);

  return (
    <div className="dashboard-container">
      <div className="dashboard" id="dashboard">
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="dashboard-section">
          <AddLinkForm onSuccess={handleLinkCreated} />
        </div>

        <div className="dashboard-section">
          <LinkTable refreshTrigger={refreshTrigger} />
        </div>

        {modalData && (
          <div className="dashboard-section">
            <Modal data={modalData} onClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
