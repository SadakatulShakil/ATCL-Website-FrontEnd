import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const AddCategories = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://atcl-website-backend.onrender.com//api/categories/add-category",
        data
      );
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full mx-auto max-w-xs">
        <label className="label">
          <span className="label-text text-black">Category Name</span>
        </label>
        <input
          {...register("categoryname", {
            required: "Category name is required",
          })}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs text-black"
        />
        <label className="label">
          {errors.categoryname && (
            <span className="label-text-alt text-red-500">
              {errors.categoryname.message}
            </span>
          )}
        </label>
      </div>

      <div className="form-control w-full mx-auto max-w-xs">
        <label className="label">
          <span className="label-text text-black">Category Description</span>
        </label>
        <textarea
          {...register("categorydescription", {
            required: "Category description is required",
          })}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs text-black"
        ></textarea>
        <label className="label">
          {errors.categorydescription && (
            <span className="label-text-alt text-red-500">
              {errors.categorydescription.message}
            </span>
          )}
        </label>
      </div>

      <div className="card-actions justify-center py-5">
        <input
          value="Save"
          className="btn w-full max-w-xs text-black btn-sm justify-center"
          type="submit"
        />
      </div>
    </form>
  );
};

export default AddCategories;
