const Button = ({ text, onClick }) => {
    return (
      <button
        className="bg-red-600 text-white px-10 py-2 lg:px-15 cursor-pointer rounded-[7px]"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;