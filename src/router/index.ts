import BlankLayout from "@/layouts/BlankLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
import React, { ReactElement } from "react";

import { createBrowserRouter } from "react-router-dom";
const GLOB_ROUTES:Record<any, any> = import.meta.glob('@/pages/**/*.tsx', { 
    eager: true,
});

const RawRoutes:Record<any, any|React.FC|ReactElement>[] = Object.keys(GLOB_ROUTES).map((route:any) => {
    const path = route
      .replace(/\/src\/pages|index|\.tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/\[(.+)\]/, ':$1');

    const PAGE:React.FC = GLOB_ROUTES[route].default;
    let LAYOUT:React.FC;

    switch ((PAGE as any).meta?.layout?.toLowerCase()) {
        case 'blank':
            LAYOUT = BlankLayout as any;
            break;
        case 'default':
        default:
            LAYOUT = DefaultLayout as any;
    }

    return ({ 
        path: path,
        element: React.createElement(LAYOUT, {}, React.createElement(GLOB_ROUTES[route].default, {}, null))
    });
});

const AppRoutes:Record<any, any|React.FC|ReactElement>[] = createBrowserRouter(RawRoutes as Record<any, any|React.FC|ReactElement>[]) as any;
export default AppRoutes;