'use client'
import React, { FC } from 'react';
import ProductCard from '../product-card';
import { Pagination } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IProduct } from '@/app/(models)/product';

interface IProps {
    total: number;
    pageSize: number;
    currentPage: number;
    data: IProduct[]
}

const ProductsList: FC<IProps> = ({ total, currentPage, pageSize, data }) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleChangePage = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className='flex flex-col align-middle w-full'>
            <ul className='grid grid-cols-4 gap-3 min-h-[1550px]'>
                {data.map((item) => (
                    <li key={item.name + item.description}>
                        <ProductCard id={item.id} name={item.name} description={item.description} />
                    </li>
                ))}
            </ul>
            <div className='mt-2 mb-2 ml-auto mr-auto'>
                <Pagination
                    total={total}
                    pageSize={pageSize}
                    current={currentPage}
                    showSizeChanger={false}
                    onChange={handleChangePage}
                />
            </div>

        </div>
    );
};

export default ProductsList;