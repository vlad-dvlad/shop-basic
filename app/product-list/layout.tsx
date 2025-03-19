import React, { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode,
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    );
};

export default Layout;