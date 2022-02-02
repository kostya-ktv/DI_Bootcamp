export const printLog = store => next => action => {
   console.log("Middleware triggered:", action);
   next(action);
 }