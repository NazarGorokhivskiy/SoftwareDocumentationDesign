const ENDPOINT = "/api/agent";

class Api {
  static async fetchAllAgents() {
    const response = await fetch(ENDPOINT);

    const result = await response.json();

    allAgents = result;

    return result;
  }

  static async uploadAgent(agent) {
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(agent),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async editAgent(id, agent) {
    try {
      const response = await fetch(`${ENDPOINT}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(agent),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async deleteAgent(id) {
    const response = await fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
    });

    await response.text();
  }
}
