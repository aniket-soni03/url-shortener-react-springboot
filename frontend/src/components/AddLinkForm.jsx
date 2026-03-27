import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "../styles/AddLinkForm.css";

const AddLinkForm = ({ onSuccess }) => {
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("https://tinylink-aniket.up.railway.app/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUrl: data.targetUrl, code: data.code || "" }),
      });

      if (res.status === 201) {
        const createdLink = await res.json();
        onSuccess(createdLink);
        reset();
      } else if (res.status === 409) {
        toast.error("Custom code already exists!");
      } else if (res.status === 400) {
        const msg = await res.text();
        toast.error(msg || "Invalid URL");
      } else {
        toast.error("Failed to create link");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  const targetUrlValue = watch("targetUrl");
  const codeValue = watch("code");

  return (
    <div className="add-link-form-container">
      <form className="add-link-form" id="add-link-form" onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="Enter URL"
          id="target-url"
          className="input-field url-field"
          {...register("targetUrl", {
            required: "URL is required",
            pattern: {
              value: /^(https?:\/\/)([\w\-]+)(\.[\w\-]+)+([\/#?].*)?$/,
              message: "URL Pattern must be : http://example.com (or https://...)"
            }
          })}
          disabled={loading}
        />
        {errors.targetUrl && <p className="error-msg error-text">{errors.targetUrl.message}</p>}

        <input
          type="text"
          placeholder="Custom Code (optional)"
          id="custom-code"
          className="input-field code-field"
          {...register("code", {
            pattern: {
              value: /^[A-Za-z0-9]{6,8}$/,
              message: "Use 6-8 letters or numbers only"
            }
          })}
          disabled={loading}
        />
        {errors.code && <p className="error-msg error-text">{errors.code.message}</p>}

        <button type="submit" disabled={loading || isSubmitting} id="generate-btn" className="submit-btn">
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
    </div>
  );
};

export default AddLinkForm;
