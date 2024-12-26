import axios from "axios";
const fetchEventDetails = (event, endPoint) => {
  console.log("event: ", event);
  console.log("endpt: ", endPoint);

  let clickedEvent = event.location;
  console.log("clickedEvent: ", clickedEvent);
  axios
    .post(`http://localhost:3001/api/${endPoint}`, { clickedEvent })
    .then((response) => {
      console.log(response.data);
      window.sessionStorage.setItem("eventData", JSON.stringify(response.data));
      window.location.href = "/eventdetails";
    })
    .catch((error) => {
      console.error("Error fetching plays events:", error);
    });
};

export { fetchEventDetails };

const fetchAllEvents = async (endPoint) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/events/category/${endPoint}`
    );
    console.log("response: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
export { fetchAllEvents };
