export const formValidation = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password must contain at least 8 characters, including uppercase, lowercase, and a number";

  return null;
};
