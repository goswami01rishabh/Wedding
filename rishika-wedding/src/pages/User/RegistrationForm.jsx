import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../assets/css/RegistrationForm.css";

function RegistrationForm() {
  const { register, handleSubmit, watch, control, setValue } = useForm({
    defaultValues: {
      numberOfGuests: 1,
      guests: [{ fullName: "", age: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "guests",
  });

  const navigate = useNavigate();
  //const noOfGuests = watch("numberOfGuests") || 1;

  const [imagePreview, setImagePreview] = useState(null);

  const handleGuestChange = (e) => {
    const count = parseInt(e.target.value);
    const currentCount = fields.length;

    if (count > currentCount) {
      for (let i = currentCount; i < count; i++) {
        append({ fullName: "", age: "" });
      }
    } else {
      for (let i = currentCount - 1; i >= count; i--) {
        remove(i);
      }
    }
    setValue("numberOfGuests", count);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log("Registration Data: ", data);
  };
  let fileInputRef = null;

  return (
    <div className="registration-form-container">
      <h2>📝 Guest Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>
            Upload Your Photo:<span> (passport-size preferred)</span>
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
            ref={(e) => {
              // Save reference to reset the input if needed
              fileInputRef = e;
            }}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
              <button
                type="button"
                className="remove-image-btn"
                onClick={() => {
                  setImagePreview(null);
                  if (fileInputRef) {
                    fileInputRef.value = null;
                  }
                }}
              >
                Remove Image
              </button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Nationality:</label>
          <input type="text" {...register("nationality")} required />
        </div>

        <div className="form-group">
          <label>No. of Guests (including yourself):</label>
          <input
            type="number"
            min="1"
            defaultValue={1}
            {...register("numberOfGuests", { valueAsNumber: true })}
            onChange={handleGuestChange}
            required
          />
        </div>

        {fields.map((guest, index) => (
          <div key={guest.id} className="guest-details-block">
            <h4>Guest {index + 1}</h4>
            <input
              type="text"
              placeholder="Full Name"
              {...register(`guests.${index}.fullName`, { required: true })}
            />
            <input
              type="number"
              placeholder="Age"
              {...register(`guests.${index}.age`, { required: true })}
            />
            <div className="form-group">
              <label>Gender:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    value="Male"
                    {...register(`guests.${index}.gender`, { required: true })}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="Female"
                    {...register(`guests.${index}.gender`)}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="Other"
                    {...register(`guests.${index}.gender`)}
                  />
                  Other
                </label>
              </div>
            </div>
          </div>
        ))}

        <div className="form-group">
          <label>Do you Prefer alcohol?</label>
          <select {...register("alcohol")}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Occasionally">Occasionally</option>
          </select>
        </div>

        <div className="form-group">
          <label>Dietary Preference:</label>
          <select {...register("diet")}>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>

        <div className="form-group">
          <label>Expected Arrival Date:</label>
          <input type="date" {...register("arrivalDate")} />
        </div>

        <div className="form-group">
          <label>
            Notes / Special Requests:{" "}
            <span>(e.g. allergies, accessibility needs)</span>
          </label>
          <textarea {...register("notes")} rows="4" />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
