export const apiClient = {
    async get(endpoint: string) {
      // Cuando tengas backend, reemplaza con fetch real
      console.log("GET", endpoint);
      return { data: null };
    },
  
    async post(endpoint: string, data: any) {
      // Actualmente simula éxito
      console.log("POST", endpoint, data);
      return { success: true };
  
      // Futura implementación real:
      /*
      const response = await fetch(`https://tu-api.com${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return response.json();
      */
    },
  };