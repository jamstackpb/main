import { addImagePrefix } from '@/src/utils';

export const Logo = () => {
    return (
        <img
            className="mr-4"
            src={addImagePrefix('/images/full_logo1.svg')}
            width="168"
            height="50"
            style={{ border: 'none' }}
        />
    );
};
