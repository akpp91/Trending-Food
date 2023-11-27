import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer H0_YlrfHGRwnQR4AIiAQJd3_YHHF9p9yfo3GoTkEiIqU2wAS6T2QuyGNMJONAMQlX3T4oicXhhY2guR3bHCl8Ss3f_Fz25I0Q6nFAotXRzeowfDjvu8ZrZqDPR0xZXYx",
  },
});