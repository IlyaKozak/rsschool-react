import { ReactComponent as Loading } from './Loading.svg';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader" data-testid="loader">
      &nbsp;
      <Loading />
    </div>
  );
};

export default Loader;
