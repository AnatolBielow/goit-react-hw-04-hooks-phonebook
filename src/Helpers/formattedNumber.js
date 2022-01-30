export const formattedNumber = (number) => {
  const arr = [...number];
  if (arr.length >= 12) {
    return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
      .slice(6, 9)
      .join("")}-${arr.slice(9).join("")}`;
  } else if (arr.length >= 10) {
    return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 5).join("")} ${arr
      .slice(5, 8)
      .join("")}-${arr.slice(8).join("")}`;
  } else if (arr.length >= 8) {
    return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
      .slice(6)
      .join("")}`;
  } else if (arr.length === 7) {
    return `${arr.slice(0, 3).join("")}-${arr.slice(3, 5).join("")}-${arr
      .slice(5)
      .join("")}`;
  } else {
    return `${arr.slice(0, 3).join("")}-${arr.slice(3).join("")}`;
  }
};
