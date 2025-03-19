import { FC, Suspense } from "react";
import ProductsList from "../components/products-list";
import { ProductService } from "../(services)/product";
import SearchInput from "../components/search-input";

interface IProps {
    searchParams: Promise<{ query?: string; page?: string }>;
}

const Page: FC<IProps> = async ({ searchParams }) => {
    const { page, query, } = await searchParams;
    const currentPage = Number(page) || 1;
    const searchTerm = query || '';
    const pageSize = 12
    const { data, items } = await ProductService.getProducts(currentPage, pageSize, searchTerm);

    return (
        <Suspense key={searchTerm + currentPage} fallback={<div>Loading...</div>}>
            <div className="p-4">
                <div className="pb-2 w-[500px] mr-auto ml-auto">
                    <SearchInput />
                </div>
                <ProductsList total={items} data={data} pageSize={pageSize} currentPage={currentPage} />
            </div>
        </Suspense>
    );
};

export default Page;