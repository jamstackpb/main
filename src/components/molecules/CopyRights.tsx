import React from 'react';

const Copyrights: React.FC = ({ children }) => (
    <div className="max-w-full justify-center text-secondaryFontColor text-center flex font-medium mt-10">{children}</div>
);

export const CopyRights = () => {
    return (
        <Copyrights>
            <p>All rights reserved &copy; JAMstack PB 2022</p>
        </Copyrights>
    );
};
