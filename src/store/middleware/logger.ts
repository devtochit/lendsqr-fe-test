const logger = (param: any) => (store: any) => (next: any) => (action: any) => {
  console.log("Logger", param);
  next(action);
};

export default logger;
