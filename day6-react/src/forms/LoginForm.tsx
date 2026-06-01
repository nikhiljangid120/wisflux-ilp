// ============================================
// Day 7 — LoginForm.tsx
// Demonstrates: Controlled Forms, Events in React
// ============================================

import { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

function LoginForm() {
  // Controlled form state
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // useRef — focus the name field on mount
  const nameRef = useRef<HTMLInputElement>(null);

  // Generic change handler for all fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Validate
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    if (!validate()) return;

    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", password: "" });
  };

  if (submitted) {
    return (
      <div className="card">
        <h2>Login Form — Controlled Form</h2>
        <div className="success-box">
          <p>✅ Form submitted successfully!</p>
          <button
            className="btn btn-green"
            onClick={() => setSubmitted(false)}
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Login Form — Controlled Form</h2>
      <p className="description">
        Every keystroke updates React state. The form is fully controlled.
      </p>

      <form onSubmit={handleSubmit} className="form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            ref={nameRef}
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Nikhil Jangid"
            className={errors.name ? "input error-input" : "input"}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
            placeholder="nikhil@wisflux.com"
            className={errors.email ? "input error-input" : "input"}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Min 6 characters"
            className={errors.password ? "input error-input" : "input"}
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="btn btn-green submit-btn">
          Submit
        </button>
      </form>

      {/* Live preview — shows controlled form in action */}
      <div className="live-preview">
        <p>Live state: <code>{JSON.stringify(form)}</code></p>
      </div>
    </div>
  );
}

export default LoginForm;
