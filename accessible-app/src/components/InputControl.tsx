import { useEffect, useState, type ChangeEvent, type FC } from "react";

interface InputControlProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "textarea";
  value: string;
  required?: boolean;
  autocomplete?: string;
  disabled?: boolean;
  placeholder?: string;
  example?: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputControl: FC<InputControlProps> = ({
  id,
  name,
  label,
  type = "text",
  value,
  required = false,
  autocomplete,
  disabled = false,
  placeholder,
  example,
  error,
  onChange,
}) => {
  const [touched, setTouched] = useState(false);
  const [ariaDescribedBy, setAriaDescribedBy] = useState<string | undefined>(
    undefined,
  );

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!touched) {
      onChange(e);
      setTouched(true);
    }
  };

  useEffect(() => {
    const ids = [];
    if (example) ids.push(`${id}-example`);
    if (error) ids.push(`${id}-error`);
    setAriaDescribedBy(ids.length > 0 ? ids.join(" ") : undefined);
  }, [placeholder, example, error, id]);

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1 font-semibold"
        id={`${id}-label`}
      >
        {label}
        {required ? (
          <span className="text-red-400" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="text-sm text-blue-200" aria-label="optional">
            (optional)
          </span>
        )}
        {required && <span className="sr-only">required</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={ariaDescribedBy}
          className="block w-full rounded border border-gray-300 bg-blue-100 p-2 font-medium text-blue-950 outline-blue-600"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          required={required}
          autoComplete={autocomplete}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={ariaDescribedBy}
          className="block w-full rounded border border-gray-300 bg-blue-100 p-2 font-medium text-blue-950 outline-blue-600"
        />
      )}
      {example && (
        <span id={`${id}-example`} className="sr-only">
          Example: {example}
        </span>
      )}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1 text-sm text-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className="inline-block"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 8v4m0 4h.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {error}
        </span>
      )}
    </div>
  );
};

export default InputControl;
