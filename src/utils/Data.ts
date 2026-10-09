interface ProductCategoryProps {
  categoryName: string;
}

export const getNavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { next: { revalidate: 3600 } },
  );

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new Error("Api fetched failed");
  }
  return await res.json();
};

export const getAllProducts = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 3600 } },
  );
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error("Api fetched failed");
  }
  return await res.json();
};

export const getProductCategory = async ({
  categoryName,
}: ProductCategoryProps) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryName}`,
    { next: { revalidate: 3600 } },
  );

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new Error("Api fetched failed");
  }
  return await res.json();
};

export const getSingleProduct = async ({
  categoryName,
}: ProductCategoryProps) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/categories/${categoryName}`,
    { next: { revalidate: 3600 } },
  );

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new Error("Api fetched failed");
  }
  return await res.json();
};

export const getProductDetails = async ({
  productId,
}: {
  productId: string;
}) => {

    const res = await fetch(
      `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
      { next: { revalidate: 3600 } },
    );
    if (res.status === 404) return null;
    if (!res.ok) {
      throw new Error("Api fetched failed");
    }
    return await res.json();
  
};
