import { ProductService } from '@/app/(services)/product';
import React from 'react';

const ProductsList = async () => {
    const data = await ProductService.getProducts();
    return (
        <div>

        </div>
    );
};

export default ProductsList;