import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

function GoogleAnalyticsScript() {
  if (process.env.NODE_ENV === 'production') {
    return (
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC ?? ''} />
    );
  }
  return <></>;
}

export default GoogleAnalyticsScript;
