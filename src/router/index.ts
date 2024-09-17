import { ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
const GLOB_ROUTES:Record<any, any> = import.meta.glob('@/pages/**/*.tsx', { 
    eager: true,
});

const RawRoutes:Record<any, any|React.FC|ReactElement>[] = Object.keys(GLOB_ROUTES).map((route:any) => {
    const path = route
      .replace(/\/src\/pages|index|\.tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/\[(.+)\]/, ':$1');

    return { 
        path: path,
        lazy: () => ({ Component: GLOB_ROUTES[route].default })
    };
});

const AppRoutes:Record<any, any|React.FC|ReactElement>[] = createBrowserRouter(RawRoutes as Record<any, any|React.FC|ReactElement>[]) as any;
export default AppRoutes;