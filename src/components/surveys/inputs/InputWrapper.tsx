const InputWrapper = ({
  label,
  children,
  error = null,
  required,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  error?: string | null;
  required?: boolean;
}) => {
  return (
    <div>
      <label className="cursor-pointer">
        <span className="block font-bold mb-1">
          {label}
          {required && <small> (required)</small>}
        </span>
        {children}
        {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
      </label>
    </div>
  );
};

export default InputWrapper;
