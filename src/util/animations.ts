export const fadeGrowIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-200px" },
  transition: { duration: 0.3 },
};

export const dropIn = {
  initial: { opacity: 0, translateY: -100 },
  whileInView: { opacity: 1, translateY: 0 },
  viewport: { once: true, margin: "-200px" },
  transition: { duration: 0.5 },
};

export const slideInRight = {
  initial: { opacity: 0, translateX: 300 },
  whileInView: { opacity: 1, translateX: 0 },
  viewport: { once: true, margin: "-200px" },
  transition: { duration: 0.5 },
};

export const slideInLeft = {
  initial: { opacity: 0, translateX: -300 },
  whileInView: { opacity: 1, translateX: 0 },
  viewport: { once: true, margin: "-200px" },
  transition: { duration: 0.5 },
};
