export const setLocalStarage = (name) => {
  try {
    localStorage.setItem("userName", name);
  } catch (error) {
    console.log(error);
  }
};
