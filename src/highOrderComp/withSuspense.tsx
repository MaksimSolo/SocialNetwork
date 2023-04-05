import React, {ComponentType, LazyExoticComponent, Suspense} from "react";
import Preloader from "../Components/Preloader/Preloader";


export function withSuspense(Component: ComponentType| LazyExoticComponent<any>) {
  return <Suspense fallback={<Preloader/>}>
          <Component/>
        </Suspense>
}
