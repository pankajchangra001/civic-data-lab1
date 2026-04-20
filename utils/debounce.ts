export const debounce = <T>(fn: (arg: T) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (arg: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(arg);
    }, delay);
  };
};
