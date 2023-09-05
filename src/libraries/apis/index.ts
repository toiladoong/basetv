const apiKey = `7aae88a20d41b4f84ff26c4c22f60738`;

export const getMovies = async () => {
  return await _getLatest('movie');
};

const _getLatest = async (type) => {
  return _get(`/${type}/top_rated`).then((response) => {
    return response
  });
};

const _get = (url, params) => {
  let params_str = `?api_key=${apiKey}`;

  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      params_str += "&" + key + "=" + encodeURIComponent(params[key]);
    }
  }

  return fetch(`https://api.themoviedb.org/3${url}${params_str}`, {
    Accept: "application/json",
  })
  .then((response) => {
    if (!response.ok) throw "Response not ok";
    return response.json();
  })
  .catch((error) => {
    console.error("Error loading " + url, error);
    throw error;
  });
};