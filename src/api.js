import { mockData } from './mock-data';
import NProgress from 'nprogress';
import axios from 'axios';
// const axios = require('axios');






export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
  };


  const checkToken = async (accessToken) => {
    const result = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
    )
      .then((res) => res.json())
      .catch((error) => error.json());
  
    return result;
  };




  export const getEvents = async () => {
    NProgress.start();

    if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  }
  
  if (!navigator.onLine) {
    const data = localStorage.getItem("lastEvents");
    NProgress.done();
    return data?JSON.parse(data).events:[];;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    let accessTokenUrl = "https://fl68ixz9r0.execute-api.eu-central-1.amazonaws.com/dev/api/get-events";
    
    const url = `${accessTokenUrl}/${token}`;
    

    const result = await axios.get(url);
    if (result.data) {

      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }

  

};



  export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
    const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        " https://fl68ixz9r0.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
  }



  const removeQuery = () => {
    if (window.history.pushState && window.location.pathname) {
      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      window.history.pushState("", "", newurl);
    } else {
      newurl = window.location.protocol + "//" + window.location.host;
      window.history.pushState("", "", newurl);
    }
  };



  const getToken = async (code) => {
    const encodeCode = encodeURIComponent(code);
    let codeUrl = "https://fl68ixz9r0.execute-api.eu-central-1.amazonaws.com/dev/api/token";
    const { access_token } = await fetch(
      `${codeUrl}/${encodeCode}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => error);
  
    access_token && localStorage.setItem("access_token", access_token);
  
    return access_token;
  };




  // endpoints:
  // GET - https://fl68ixz9r0.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url
  // GET - https://fl68ixz9r0.execute-api.eu-central-1.amazonaws.com/dev/api/token/{code}
  // GET - https://fl68ixz9r0.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/{access_token}






