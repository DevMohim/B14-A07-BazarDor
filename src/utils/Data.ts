interface ProductCategoryProps {
  categoryName: string;
}

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

export const getAllProducts = async () => {
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
};

export const getProductCategory = async ({
  categoryName,
}: ProductCategoryProps) => {
  try {
    const res = await fetch(
      `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryName}`,
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

export const getSingleProduct = async ({
  categoryName,
}: ProductCategoryProps) => {
  try {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/bazardor/categories/${categoryName}`,
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

export const getProductDetails = async ({
  productId
}: {
  productId: string;
}) => {
  try {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
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
