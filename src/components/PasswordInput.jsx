function PasswordInput() {

  const handleChange = () => {
    console.log("User is typing");
  };

  const handleMouseOver = () => {
    console.log("Mouse over button");
  };

  const handleMouseOut = () => {
    console.log("Mouse left button");
  };

  return (
    <>
      <input
        type="password"
        onChange={handleChange}
      />

      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit Password
      </button>
    </>
  );
}

export default PasswordInput;