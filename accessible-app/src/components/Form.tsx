import {
  useState,
  useReducer,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import Heading from "@/components/Heading";
import InputControl from "@/components/InputControl";

interface FormData {
  name: string;
  alias?: string;
  email: string;
  message: string;
}

interface FormPayload {
  name: string;
  value: string;
}

const initialData: FormData = {
  name: "",
  alias: "",
  email: "",
  message: "",
};

const formReducer = (
  state: FormData,
  action: { type: string; payload?: FormPayload },
) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      if (action.payload)
        return { ...state, [action.payload.name]: action.payload.value };
      return state;
    case "RESET":
      return initialData;
    default:
      return state;
  }
};

const formValidator = ({ name, alias, email, message }: FormData) => {
  const errors: {
    name?: string;
    alias?: string;
    email?: string;
    message?: string;
  } = {};

  if (!name.trim()) errors.name = "Name is required.";
  if (alias && !/^[a-zA-Z0-9]+$/.test(alias))
    errors.alias = "Alias must be alphanumeric.";
  if (!email.trim()) errors.email = "Email is required.";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Email is invalid.";
  if (!message.trim()) errors.message = "Message is required.";

  return errors;
};

const Form: FC = () => {
  const [formData, dispatch] = useReducer(formReducer, initialData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    alias?: string;
    email?: string;
    message?: string;
  }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", payload: { name, value } });
    setErrors((prev) => {
      const field = name as keyof FormData;
      const updatedData = { ...formData, [field]: value };
      const validationErrors = formValidator(updatedData);
      return { ...prev, [field]: validationErrors[field] };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = formValidator(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      alert(
        `Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      );
      dispatch({ type: "RESET" });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div>
      <Heading level={3}>Contact Us</Heading>
      <p className="mb-4">
        All fields marked with an asterisk (*) are required.
      </p>
      <form onSubmit={handleSubmit} aria-label="Contact form" noValidate>
        <InputControl
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <InputControl
          id="alias"
          name="alias"
          label="Alias"
          value={formData.alias || ""}
          onChange={handleChange}
          error={errors.alias}
        />
        <InputControl
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <InputControl
          id="message"
          name="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />
        <button
          disabled={
            !!errors.name ||
            !!errors.email ||
            !!errors.message ||
            !formData.name ||
            !formData.email ||
            !formData.message
          }
          aria-disabled={
            !!errors.name ||
            !!errors.email ||
            !!errors.message ||
            !formData.name ||
            !formData.email ||
            !formData.message
          }
          type="submit"
          className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 disabled:opacity-50"
        >
          Send Message
        </button>
        <div aria-live="assertive" role="alert" className="sr-only">
          {errors.name || errors.email || errors.message}
        </div>
        {submitted && (
          <div role="status" aria-live="polite" className="mt-4 text-green-300">
            Thank you for your submission!
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
