import React, { FC } from 'react';
import { IProduct } from '@/app/(models)/product';
import Image from 'next/image'
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import noImage from '../../../public/no-image.webp';
import Link from 'next/link';


type IProps = Pick<IProduct, 'id' | 'name' | 'description'>

const ProductCard: FC<IProps> = ({ id, name, description }) => {

    return (
        <Link href={`/product-list/${id}`}>
            <Card
                hoverable
                className='border-black'
                cover={
                    <Image src={noImage} alt={name} priority width={200} height={200} />
                }
            >
                <Meta title={name} description={description} />
            </Card>
        </Link>

    );
};

export default ProductCard;