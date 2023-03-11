export const constants = {
  IS_CLIENT: typeof window !== "undefined"
};

Object.entries(constants).forEach(([key, value]) => {
  if (typeof value === "undefined") throw new Error(`${key} not found!`);
});
