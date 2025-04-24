const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-black text-sm placeholder:text-gray-500"
    />
  );
};

export default InputField;
