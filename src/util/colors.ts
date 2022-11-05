export const colors = {
  orange: "#fad679",
  blue: "#01AEF0",
  green: "#8BC741",
  pink: "#ED008C",
  purple: "#662F94",
  red: "#E30713",
  cyan: "#6FCCD3",
};

export const getRandomColor = (): string => {
  const keys: string[] = Object.keys(colors);
  const random = Math.floor(Math.random() * keys.length);
  const key: string = keys[random] || "orange";

  if (localStorage.getItem("twl-last-color") === key) {
    return getRandomColor();
  }

  localStorage.setItem("twl-last-color", key);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return colors[key];
};
