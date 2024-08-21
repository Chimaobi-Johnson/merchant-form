export default function Input({
  type,
  value,
  placeholder,
  inputName,
  label,
  ...props
}) {
  return (
    <div className="flex flex-col">
      <label for={label.replace(/ /g,'')}>{label}:</label>
      <input
        className=" rounded-md p-3 w-full bg-transparent border-[1px] border-gray-400"
        id={label.replace(/ /g,'')}
        name={inputName}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
