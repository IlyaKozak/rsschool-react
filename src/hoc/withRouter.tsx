import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export default function withRouter<Props extends WithRouterProps>(
  WrappedComponent: React.ComponentType<Props>
) {
  function ComponentWithRouterProps(props: Omit<Props, keyof WithRouterProps>) {
    return <WrappedComponent {...(props as Props)} location={useLocation()} />;
  }

  return ComponentWithRouterProps;
}
