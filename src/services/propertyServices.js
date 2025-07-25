import api from "./api";

export const getResidencies = async (queryParams) => {
  try {
    const response = await api.get("/residency/residencies", {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

export const getResidencyById = async (id) => {
  try {
    const response = await api.get(`/residency/residencies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching property with ID ${id}:`, error);
    throw error;
  }
}

export const createResidency = async (residencyData) => {
  try {
    const response = await api.post("/residency/create", residencyData);
    return response.data;
  } catch (error) {
    console.error("Error creating residency:", error);
    throw error;
  }
}