import React, { FC } from 'react';
import { ProductService } from '@/app/(services)/product';
import Image from 'next/image';
import noImage from '../../../public/no-image.webp';

interface IProps {
    params: Promise<{ id: string }>
}

const Page: FC<IProps> = async ({ params }) => {
    const { id } = await params;
    const product = await ProductService.getSingleProduct(Number(id));

    return (
        <section className='flex flex-col'>
            <Image src={noImage} alt={product.name} priority width={200} height={200} />
        </section>
    );
};

export default Page;