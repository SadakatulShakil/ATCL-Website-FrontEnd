import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // To show spinner on the specific delete button

  // Fetch services
  const fetchServices = () => {
    axios
      .get("https://atcl-website-backend.onrender.com//api/services/all")
      .then((res) => setServices(res.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        toast.error("Failed to fetch services.");
      });
  };

  // Delete service
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      setLoadingId(id);
      await axios.delete(`https://atcl-website-backend.onrender.com//api/services/${id}`);
      setServices((prev) => prev.filter((service) => service._id !== id));
      toast.success("Service deleted successfully.");
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
            {services.map((service, index) => (
              <tr key={service._id}>
                <td>{index + 1}</td>
                <td>{service.servicename}</td>
                <td>{service.servicedescription}</td>
                <td>
                  <img
                    src={`https://atcl-website-backend.onrender.com//${service.image}`}
                    alt="Service"
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700 flex items-center"
                    disabled={loadingId === service._id}
                  >
                    {loadingId === service._id ? (
                      <span className="loading loading-spinner loading-sm text-white"></span>
                    ) : (
                      "Edit"
                    )}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700 flex items-center"
                    disabled={loadingId === service._id}
                  >
                    {loadingId === service._id ? (
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

export default ManageServices;
