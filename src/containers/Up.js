import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// After Navigate to other Path , will scroll up to Top of the Page.
function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);