export const fetchAboutData = () =>
  fetch("http://localhost:5001/about").then((response) => {
    if (!response.ok) {
      return Promise.reject(new Error("Network response was not ok"));
    }
    return response.json();
  });

export const fetchCareersData = () =>
  fetch("http://localhost:5001/careers").then((response) => {
    if (!response.ok) {
      return Promise.reject(new Error("Network response was not ok"));
    }
    return response.json();
  });

export const fetchProjectsData = () =>
  fetch("http://localhost:5001/projects").then((response) => {
    if (!response.ok) {
      return Promise.reject(new Error("Network response was not ok"));
    }
    return response.json();
  });

export const fetchXpProsData = () =>
  fetch("http://localhost:5001/xppro").then((response) => {
    if (!response.ok) {
      return Promise.reject(new Error("Network response was not ok"));
    }
    return response.json();
  });
