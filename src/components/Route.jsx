import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    const paths = ['/staking/staking', '/staking/', '/staking', '/staking/invite','/staking/stake']
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);
        
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, [])

    return ((currentPath === path) || (!paths.includes(currentPath) && !path)) ? children : null
}

export default Route;