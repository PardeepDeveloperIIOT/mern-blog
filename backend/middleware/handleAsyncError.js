export default (myAsynError) => (req, res, next) => {
  Promise.resolve(myAsynError(req, res, next)).catch(next);
};
