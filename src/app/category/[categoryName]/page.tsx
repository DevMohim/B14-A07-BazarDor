
import CategoryContent from "@/components/CategoryContent";
import CategoryContentSkeleton from "@/components/Skeletons/CategoryContentSkeleton";
import { Suspense } from "react";



const CategroyPage = async ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {


  return (
    <Suspense fallback={<CategoryContentSkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategroyPage;
