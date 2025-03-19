'use client'
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <input
            className='w-full bg-white p-2 border-1 rounded-md'
            placeholder='Enter name or description'
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
        />
    );
};

export default SearchInput;