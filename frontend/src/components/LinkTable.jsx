import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/LinkTable.css";
import CopyButton from "./CopyButton";

const LinkTable = ({ refreshTrigger }) => {
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchLinks = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://tinylink-aniket.up.railway.app/api/links");
      const data = await res.json();
      setLinks(data);
      setFilteredLinks(data);
    } catch (err) {
      toast.error("Error fetching links");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLinks(); }, [refreshTrigger]);

  const deleteLink = async (code) => {
    try {
      const res = await fetch(`https://tinylink-aniket.up.railway.app/api/links/${code}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Link deleted successfully");
        fetchLinks();
      } else {
        toast.error("Error deleting link");
      }
    } catch {
      toast.error("Network error");
    }
  };

  useEffect(() => {
    if (!search) {
      setFilteredLinks(links);
    } else {
      const lower = search.toLowerCase();
      const filtered = links.filter(link =>
        link.code.toLowerCase().includes(lower) ||
        link.targetUrl.toLowerCase().includes(lower)
      );
      setFilteredLinks(filtered);
    }
  }, [search, links]);

  if (loading) return <p className="link-loading">Loading...</p>;
  if (!filteredLinks.length) return <p className="link-empty">No links found.</p>;

  return (
    <div className="link-table-wrapper">
      <div className="link-search-container">
        <input
          type="text"
          placeholder="Search by code or URL..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="link-search"
          id="link-search"
        />
      </div>
      <div className="link-table-container" id="link-table-container">
        <table className="link-table" id="link-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Original URL</th>
              <th>Clicks</th>
              <th>Last Clicked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLinks.map(link => (
              <tr key={link.code} className="link-table-row">
                <td className="link-table-cell">{link.code}</td>
                <td className="link-table-cell" title={link.targetUrl}>{link.targetUrl}</td>
                <td className="link-table-cell">{link.clickCount}</td>
                <td className="link-table-cell">{link.lastClicked ? new Date(link.lastClicked).toLocaleString() : "Never"}</td>
                <td className="link-table-cell link-actions">
                  <button className="delete-btn" onClick={() => deleteLink(link.code)}>Delete</button>
                  <CopyButton text={`https://tinylink-aniket.up.railway.app/${link.code}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinkTable;
