import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddServices = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("servicename", data.servicename);
      formData.append("servicedescription", data.servicedescription);
      formData.append("file", data.file[0]); // Assuming "file" is the name of the file input

      const response = await fetch("http://localhost:5050/api/services", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        reset();
        toast.success("Service Add successfully.");
      }

      const responseData = await response.json();
      console.log(responseData, formData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-black py-4 text-center">Add Services </h1>
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text text-black"> Service Name</span>
          </label>
          <input
            {...register("servicename", {
              required: {
                value: true,
                message: "Service name is requried",
              },
            })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black"
          />
          <label className="label">
            {errors.servicename?.type === "required" && (
              <span className="label-text-alt text-red-500" role="alert">
                {errors.servicename.message}
              </span>
            )}

            {/* <span>Bottom Left label</span> */}
          </label>
        </div>
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text text-black">Service Description</span>
          </label>
          <textarea
            {...register("servicedescription", {
              required: {
                value: true,
                message: "Service description is requried",
              },
            })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black "
          ></textarea>
          <label className="label">
            {errors.servicedescription?.type === "required" && (
              <span className="label-text-alt text-red-500" role="alert">
                {errors.servicedescription.message}
              </span>
            )}

            {/* <span>Bottom Left label</span> */}
          </label>
        </div>
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text text-black">Image Upload</span>
          </label>
          <input
            {...register("file", {
              required: {
                value: true,
                message: "Image is requried",
              },
            })}
            type="file"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black"
          />

          <label className="label">
            {errors.file?.type === "required" && (
              <span className="label-text-alt text-red-500" role="alert">
                {errors.file.message}
              </span>
            )}

            {/* <span>Bottom Left label</span> */}
          </label>
        </div>
        <div className="card-actions justify-center py-5 ">
          <input
            value="Save"
            className="btn w-full   max-w-xs  text-black btn-sm   justify-center"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddServices;
