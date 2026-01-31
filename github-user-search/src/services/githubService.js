import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com/users",
  // You can use a token if needed:
  // headers: {
  //   Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
  // }
});

const fetchUserData = async (username) => {
  const response = await githubApi.get(`/${username}`);
  return response.data;
};

export default fetchUserData;
