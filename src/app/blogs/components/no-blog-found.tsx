import React from 'react';
import { BookX } from 'lucide-react';

function NoBlogFound() {
  return (
    <div className="flex h-screen-vh flex-col items-center justify-center space-y-6 rounded-xl border border-surface-200 bg-gradient-to-br from-surface-50 to-surface-100 p-8 shadow-lg">
      <div className="rounded-full border-2 border-primary-200 bg-surface-50 p-6 shadow-md">
        <BookX className="h-24 w-24 text-primary-300" />
      </div>
      <h2 className="font-primary text-3xl font-bold text-primary-500">
        No Blogs Found
      </h2>
      <p className="max-w-md text-center font-primary text-lg text-primary-400">
        Oops! It looks like there aren&apos;t any blogs available at the moment.
        Check back later for exciting new content!
      </p>
      <div className="h-1 w-24 rounded-full bg-accent-300"></div>
    </div>
  );
}

export default NoBlogFound;
