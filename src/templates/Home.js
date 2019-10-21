import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { TransitionStatusContext } from '../components/Layout';

const useTimeout = (fn, deps, ms) => {
  const fnRef = useRef(fn);
  useLayoutEffect(() => {
    fnRef.current = fn;
  }, [fn, fnRef]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fnRef.current();
    }, ms);
    return () => clearTimeout(timeout);
  }, [...deps]); // eslint-disable-line react-hooks/exhaustive-deps
};

const Index = props => {
  const transitionState = useContext(TransitionStatusContext);

  const [isLoading, setIsLoading] = useState(
    typeof window !== undefined && transitionState === 'entered'
      ? 'is-loading'
      : ''
  );

  useTimeout(
    () => {
      setIsLoading('');
    },
    [],
    100
  );

  return (
    <div
      className={`body ${isLoading} ${
        transitionState !== 'entered' ? 'is-article-visible' : ''
      }`}
    >
      <Helmet>
        <link rel="canonical" href={`/`} />
      </Helmet>

      <div id="wrapper">
        <Header />
        <Footer />
      </div>
      <div id="bg"></div>
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
