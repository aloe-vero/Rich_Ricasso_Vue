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
        "Content-Type": "text/plain; charset=UTF-8", // Spécifier le type de contenu comme texte brut
      },
    });

    // Vérification de la réponse
    if (!response.ok) {
      const errorData = await response.text(); // Lire la réponse en texte brut en cas d'erreur
      throw new Error(errorData || "Une erreur est survenue lors de la création.");
    }

    const result = await response.json();
    console.log(result)// Traiter la réponse JSON (si votre API retourne JSON)
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
