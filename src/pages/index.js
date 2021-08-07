import React from 'react';

import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
  return <Redirect to={useBaseUrl('/landing')} />;
}

export default Home;
