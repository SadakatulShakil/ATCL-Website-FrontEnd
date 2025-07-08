import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTeamMember = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("membername", data.membername);
      formData.append("memberdesignation", data.memberdesignation);
      formData.append("file", data.file[0]);

      const response = await axios.post(
        "https://atcl-website-backend.onrender.com/api/team/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) {
        reset();
        toast.success("Member added successfully.");
        console.log(response.data);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to add member. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-black py-4 text-center">Add Tem Member </h1>
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text text-black"> Member Name</span>
          </label>
          <input
            {...register("membername", {
              required: {
                value: true,
                message: "Member name is requried",
              },
            })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black"
          />
          <label className="label">
            {errors.membername?.type === "required" && (
              <span className="label-text-alt text-red-500" role="alert">
                {errors.membername.message}
              </span>
            )}

            {/* <span>Bottom Left label</span> */}
          </label>
        </div>
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text text-black">Member Designation</span>
          </label>
          <textarea
            {...register("memberdesignation", {
              required: {
                value: true,
                message: "Member  Designation is requried",
              },
            })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black "
          ></textarea>
          <label className="label">
            {errors.memberdesignation?.type === "required" && (
              <span className="label-text-alt text-red-500" role="alert">
                {errors.memberdesignation.message}
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

export default AddTeamMember;
