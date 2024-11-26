import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function ScrollToTop({ mainRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (mainRef && mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, mainRef]);

  return null;
}

ScrollToTop.propTypes = {
  mainRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};
