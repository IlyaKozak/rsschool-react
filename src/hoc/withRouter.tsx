import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export default function withRouter<Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) {
  function ComponentWithRouterProp(props: Omit<Props, keyof WithRouterProps>) {
    return <Component {...(props as Props)} location={useLocation()} />;
  }

  return ComponentWithRouterProp;
}
