export const setLocalStarage = (name) => {
  try {
    localStorage.setItem("userName", name);
  } catch (error) {
    console.log(error);
  }
};

export const getLocalStorage = () => {
  try {
    const isNameExists = localStorage.getItem("userName");
    if (!isNameExists) return false;
    return isNameExists;
  } catch (error) {
    console.log(error);
  }
};
