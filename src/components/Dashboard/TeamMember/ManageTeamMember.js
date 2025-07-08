import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageTeamMember = () => {
  const [teams, setTeams] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // To show spinner on the specific delete button

  // Fetch services
  const fetchServices = () => {
    axios
      .get("https://atcl-website-backend.onrender.com/api/team/all")
      .then((res) => setTeams(res.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("Failed to fetch team.");
      });
  };

  // Delete service
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      setLoadingId(id);
      await axios.delete(`https://atcl-website-backend.onrender.com/api/team/${id}`);
      setTeams((prev) => prev.filter((team) => team._id !== id));
      toast.success("Team Menber deleted successfully.");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete service.");
    } finally {
      setLoadingId(null);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-full p-4">
        <table className="table table-zebra w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th>#</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {teams.map((team, index) => (
              <tr key={team._id}>
                <td>{index + 1}</td>
                <td>{team.membername}</td>
                <td>{team.memberdesignation}</td>
                <td>
                  <img
                    src={`https://atcl-website-backend.onrender.com/${team.image}`}
                    alt="Service"
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(team._id)}
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700 flex items-center"
                    disabled={loadingId === team._id}
                  >
                    {loadingId === team._id ? (
                      <span className="loading loading-spinner loading-sm text-white"></span>
                    ) : (
                      "Edit"
                    )}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(team._id)}
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700 flex items-center"
                    disabled={loadingId === team._id}
                  >
                    {loadingId === team._id ? (
                      <span className="loading loading-spinner loading-sm text-white"></span>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeamMember;
