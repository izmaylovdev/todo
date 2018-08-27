import { ActivatedRouteSnapshot } from '@angular/router';

export function getParamForRoute(route: ActivatedRouteSnapshot, paramName: string) {
    // if we don't have params in current route try to find it in children route
    if (!route.paramMap.get(paramName)) {
        return route.children[0] && getParamForRoute(route.children[0], paramName);
    }

    return route.paramMap.get(paramName);
}
