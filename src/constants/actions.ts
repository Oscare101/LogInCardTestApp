export default async function GetImages() {
  try {
    const response = await fetch('https://picsum.photos/v2/list', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return {error: 'Failed to fetch images'};
  }
}
