
const API_URL = "https://6942fb4669b12460f31375de.mockapi.io/projects";

export const getProjects = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch projects');
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
};

export const deleteProject = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        return response.ok;
    } catch (error) {
        console.error("API Error:", error);
        return false;
    }
};

export const createProject = async (project) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project),
        });
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
};
