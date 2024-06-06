export const formValidation = {
  email: (input) => {
    if (input.includes("@") && input.includes(".")) {
      return true;
    } else {
      return false;
    }
  },
};
