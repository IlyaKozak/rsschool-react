import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

const withRouter = <Props extends WithRouterProps>(Component: React.ComponentType<Props>) => {
  const ComponentWithRouterProp = (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();

    return <Component {...(props as Props)} router={{ location }} />;
  };

  return ComponentWithRouterProp;
};

export default withRouter;
