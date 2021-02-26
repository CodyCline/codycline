import * as React from "react";


//Simple hook to determine whether we are rendering or are building server-side
export const useHasMounted = () =>  {
    const [hasMounted, setHasMounted] = React.useState<boolean>(false);
    React.useEffect(() => {
      setHasMounted(true);
    }, []);
    return hasMounted;
}