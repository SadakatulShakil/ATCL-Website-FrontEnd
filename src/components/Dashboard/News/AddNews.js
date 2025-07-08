import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AddNews = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("newsHeadline", data.newsHeadline);
    formData.append("publishDate", data.publishDate.toISOString());
    formData.append("newsDescription", data.newsDescription);
    formData.append("file", data.file[0]); // single file

    try {
      const response = await axios.post(
        "http://localhost:5050/api/news/add-news",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Server response:", response.data); // use response here
      alert("News added successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Error submitting news");
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-black py-4 text-center">Add News</h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          {/* News Headline */}
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-black">News Headline</span>
            </label>
            <input
              {...register("newsHeadline", {
                required: "News Headline is required",
              })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-black"
            />
            {errors.newsHeadline && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.newsHeadline.message}
                </span>
              </label>
            )}
          </div>

          {/* Publish Date */}
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-black">Publish Date</span>
            </label>
            {/* <Controller
              control={control}
              name="publishDate"
              rules={{ required: "Publish date is required" }}
              render={({ field }) => (
                <DatePicker
                  className="input input-bordered w-full max-w-xs text-black"
                  placeholderText="Select date"
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                />
              )}
            /> */}
            <Controller
              name="publishDate"
              control={control}
              rules={{ required: "Publish Date is required" }}
              render={({ field }) => (
                <div>
                  <DayPicker
                    className="   max-w-xs bg-blue text-black"
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                  />
                  {errors.publishDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.publishDate.message}
                    </p>
                  )}
                </div>
              )}
            />

            {errors.publishDate && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.publishDate.message}
                </span>
              </label>
            )}
          </div>

          {/* News Description */}
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-black">News Description</span>
            </label>
            <textarea
              {...register("newsDescription", {
                required: "News Description is required",
              })}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-black"
            />
            {errors.newsDescription && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.newsDescription.message}
                </span>
              </label>
            )}
          </div>

          {/* Image Upload */}
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text text-black">Image Upload</span>
            </label>
            <input
              {...register("file", {
                required: "Image is required",
              })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs text-black"
            />
            {errors.file && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.file.message}
                </span>
              </label>
            )}
          </div>

          {/* Submit Button */}
          <div className="card-actions justify-center py-5">
            <input
              value="Save"
              className="btn w-full max-w-xs text-black btn-sm justify-center"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
