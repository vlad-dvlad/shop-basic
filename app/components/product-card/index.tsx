import React, { FC } from 'react';
import { IProduct } from '@/app/(models)/product';
import Image from 'next/image'
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import noImage from '../../../public/no-image.webp';


type IProps = Pick<IProduct, 'name' | 'description'>

const ProductCard: FC<IProps> = ({ name, description }) => {

    return (
        <Card
            hoverable
            className='border-black'
            cover={
                <Image src={noImage} alt={name} priority width={200} height={200} />
            }
        >
            <Meta title={name} description={description} />
        </Card>
    );
};

export default ProductCard;