import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "../styles/Stats.css";

const Stats = () => {
  const { code } = useParams();
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://tinylink-aniket.up.railway.app/api/links/${code}`);
        if (res.ok) {
          const data = await res.json();
          setLink(data);
        } else {
          setLink(null);
          toast.error("Link not found");
        }
      } catch {
        toast.error("Network error");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [code]);

  if (loading) return <p className="stats-loading">Loading...</p>;
  if (!link) return <p className="stats-error">Link not found.</p>;

  return (
    <div className="stats-container">
      <div className="stats-page" id="stats-page">
        <main className="stats-content">
          <h2 className="stats-title">Link Stats</h2>
          <p className="stats-item">
            <strong className="stats-label">Short Code:</strong> 
            <span className="stats-value">{link.code}</span>
          </p>
          <p className="stats-item">
            <strong className="stats-label">Original URL:</strong> 
            <span className="stats-value">{link.targetUrl}</span>
          </p>
          <p className="stats-item">
            <strong className="stats-label">Total Clicks:</strong> 
            <span className="stats-value">{link.clickCount}</span>
          </p>
          <p className="stats-item">
            <strong className="stats-label">Last Clicked:</strong> 
            <span className="stats-value">{link.lastClicked ? new Date(link.lastClicked).toLocaleString() : "Never"}</span>
          </p>
        </main>
      </div>
    </div>
  );
};

export default Stats;
