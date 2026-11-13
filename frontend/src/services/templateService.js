const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchTemplates = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/templates/`);

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();

    console.log("Templates received from Django:", data);

    // If Django returns an array
    if (Array.isArray(data)) {
      return data;
    }

    // If Django returns paginated data
    if (data.results && Array.isArray(data.results)) {
      return data.results;
    }

    // If Django returns one template object
    if (data.id) {
      return [data];
    }

    return [];

  } catch (error) {
    console.error("Template fetch error:", error);
    return [];
  }
};