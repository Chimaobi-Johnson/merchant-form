export default function Input({
  type,
  value,
  placeholder,
  inputName,
  label,
  ...props
}) {
  return (
    <div className={`flex ${type === 'checkbox' ? 'flex-row-reverse justify-start items-center w-fit' : 'flex-col w-full'}`}>
      <label className={`${type === 'checkbox' ? 'flex-1 font-bold' : ''}`} for={label?.replace(/ /g,'')}>{label ? `${label}:`: ''}</label>
      <input
        className={`${type === 'checkbox' ? 'mr-2' : 'rounded-md w-full p-3 flex-1 bg-transparent border-[1px] border-gray-400'} `}
        id={label?.replace(/ /g,'')}
        name={inputName}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
