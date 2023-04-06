import { ReactComponent as Loading } from './Loading.svg';
import { ReactComponent as Ripples } from './Ripples.svg';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      &nbsp;
      <Loading />
      <Ripples />
    </div>
  );
};

export default Loader;
