import Product from "@/models/Product";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`http://localhost:4208/api/produits`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      products: data, // Use plural naming for clarity
    };
  } catch (error) {
    console.error(`Erreur lors de la récupération des produits :`, error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:4208/api/produits${id}`);
    const data = await response.json();
    console.log("DB 88777RAND:", id, data);
    return new Product(id, data);
  } catch (error) {
    console.error(`Erreur lors de la récupération du Produits ${id} :`, error);
  }
};