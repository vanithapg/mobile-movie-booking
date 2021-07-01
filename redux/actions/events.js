import * as type from "../types";

export function getEvents() {
  return {
    type: type.GET_EVENTS_REQUESTED,
  };
}

// export function getMovie() {
//   console.log("inside Action getMovie");
//   return {
//     type: type.GET_MOVIEDETAILS_REQUESTED,
//   };
// }
