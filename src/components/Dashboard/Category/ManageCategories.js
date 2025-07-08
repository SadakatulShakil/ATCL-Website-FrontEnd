import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // To show spinner on the specific delete button

  // Fetch services
  const fetchServices = () => {
    axios
      .get("http://localhost:5050/api/categories/all")
      .then((res) => setCategories(res.data))
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
      await axios.delete(`http://localhost:5050/api/categories/${id}`);
      setCategories((prev) => prev.filter((category) => category._id !== id));
      toast.success("Categories deleted successfully.");
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete category.");
    } finally {
      setLoadingId(null);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full p-4">
          <table className="table table-zebra w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th>#</th>
                <th>Category Name</th>
                <th> Category Description</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {categories.map((category, index) => (
                <tr key={category._id}>
                  <td>{index + 1}</td>
                  <td>{category.categoryname}</td>
                  <td>{category.categorydescription}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="btn btn-sm bg-red-600 text-white hover:bg-red-700 flex items-center"
                      disabled={loadingId === category._id}
                    >
                      {loadingId === category._id ? (
                        <span className="loading loading-spinner loading-sm text-white"></span>
                      ) : (
                        "Edit"
                      )}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="btn btn-sm bg-red-600 text-white hover:bg-red-700 flex items-center"
                      disabled={loadingId === category._id}
                    >
                      {loadingId === category._id ? (
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
    </div>
  );
};

export default ManageCategories;
