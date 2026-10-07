export const getNavLinks = async () => {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/categories",
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      throw new Error("Api fetched failed");
    }
    return await res.json();
  } catch (err) {
    throw new Error("Data not Found", { cause: err });
  }
};

export const getAllProducts = async() => {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/products",
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      throw new Error("Api fetched failed");
    }
    return await res.json();
  } catch (err) {
    throw new Error("Data not Found", { cause: err });
  }
}