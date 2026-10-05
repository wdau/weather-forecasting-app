export const convertTemperature = (temperature, unit) => {
  if (unit === "F") {
    return (temperature * 9) / 5 + 32;
  }

  return temperature;
};