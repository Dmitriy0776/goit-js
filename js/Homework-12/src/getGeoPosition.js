export default () => {
  const options = {
    timeout: 5000,
    maximumAge: 30 * 60 * 60 * 1000,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
