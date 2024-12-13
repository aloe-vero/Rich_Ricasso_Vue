import Utilisateur from "@/models/Utilisateur";



export const fetchUtilisateur = async (id) => {
  try {
    const response = await fetch(`http://localhost:4208/api/utilisateurs/${id}`);
    const data = await response.json();
    console.log("Utilisateur:", id, data);
    return new Utilisateur(id, data);
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'utilisateur ${id} :`, error);
  }
};

export const createUtilisateur = async (data) =>{
  try {
    const response = await fetch("http://localhost:4208/api/utilisateurs", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
      },
    });


    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || "Une erreur est survenue lors de la création.");
    }

    const result = await response.json();
    console.log(result)
    return {
      success: true,
      message: result.message,
      data: result,
    };
  } catch (error) {
    console.error("Erreur lors de la création :", error);
    return {
      success: false,
      message: error.message || "Erreur inconnue.",
    };
  }

}

export const loginUser = async (data) => {
  try {
    const response = await fetch("http://localhost:4208/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure this is correct
      },
      body: data,
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || "Erreur de connexion.");
    }

    const result = await response.json();
    console.log("Parsed Response from Backend:", result); // Log the parsed result

    return {
      success: true,
      message: result.message,
      data: result.data, // Ensure result.data exists and is structured correctly
    };
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API :", error.message);
    return {
      success: false,
      message: error.message || "Erreur inconnue.",
    };
  }
};


