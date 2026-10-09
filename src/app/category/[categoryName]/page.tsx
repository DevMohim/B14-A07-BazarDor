import CategoryContent from "@/components/CategoryContent";
import CategoryContentSkeleton from "@/components/Skeletons/CategoryContentSkeleton";
import { Suspense } from "react";


interface CategoryPageProps {
  params: Promise<{ categoryName: string }>;
}

const CategroyPage = async ({ params }: CategoryPageProps) => {
  return (
    <Suspense fallback={<CategoryContentSkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategroyPage;
