

export const inscrireAbonnement = async (courriel) => {
  try {
    const response = await fetch("http://localhost:4208/api/abonnements", {
      method: "POST",
      body: courriel, // Envoyer directement le courriel comme texte brut
      headers: {
        "Content-Type": "text/plain; charset=UTF-8", // Spécifier le type de contenu comme texte brut
      },
    });

    // Vérification de la réponse
    if (!response.ok) {
      const errorData = await response.text(); // Lire la réponse en texte brut en cas d'erreur
      throw new Error(errorData || "Une erreur est survenue lors de l'inscription.");
    }

    const result = await response.json();
    console.log(result)// Traiter la réponse JSON (si votre API retourne JSON)
    return {
      success: true,
      message: result.message,
      data: result,
    };
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    return {
      success: false,
      message: error.message || "Erreur inconnue.",
    };
  }
};

