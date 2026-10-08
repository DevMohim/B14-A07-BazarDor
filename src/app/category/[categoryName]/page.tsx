import CategoryContent from "@/components/CategoryContent";
import { Suspense } from "react";

interface CategoryPageProps {
  params: Promise<{ categoryName: string }>;
}

const CategroyPage = async ({ params }: CategoryPageProps) => {
  return (
    <Suspense fallback={<div>লোড হচ্ছে...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategroyPage;
