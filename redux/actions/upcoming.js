import * as type from "../types";

export function getUpcoming() {
  return {
    type: type.GET_UPCOMING_MOVIES_REQUESTED,
  };
}

// export function getMovie() {
//   console.log("inside Action getMovie");
//   return {
//     type: type.GET_MOVIEDETAILS_REQUESTED,
//   };
// }
