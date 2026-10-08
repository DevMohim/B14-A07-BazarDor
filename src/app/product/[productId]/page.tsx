import DetailsContent from '@/components/DetailsContent';
import { Suspense } from 'react';

const ProductDetailsPage = ({
  params
}: {
  params: Promise<{ productId: string }>;
}) => {
  return (
    <Suspense fallback={<div>লোড হচ্ছে...</div>}>
      <DetailsContent params={params} />
    </Suspense>
  );
};

export default ProductDetailsPage;