export const checkRight = async (email: string, route: string) => {
  console.log(email, route);
  //simulate fake request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
