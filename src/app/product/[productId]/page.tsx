import DetailsContent from '@/components/DetailsContent';
import DetailsContentSkeleton from '@/components/Skeletons/DetailsContentSkeleton';
import { Suspense } from 'react';

const ProductDetailsPage = ({
  params
}: {
  params: Promise<{ productId: string }>;
}) => {
  return (
    <Suspense fallback={<DetailsContentSkeleton />}>
      <DetailsContent params={params} />
    </Suspense>
  );
};

export default ProductDetailsPage;