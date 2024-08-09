export const exerciseOptions = {
    method: 'GET',
    headers: {
      
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '2ddec9392fmsha06b40f602ba955p1b8658jsn21cb7c87bc57'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '2ddec9392fmsha06b40f602ba955p1b8658jsn21cb7c87bc57',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) =>
{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}