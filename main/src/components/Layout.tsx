import React from 'react';

const Sub = React.lazy(() => import('sub/Home'));

export default function Layout() {
  return (
    <div style={{ border: '1px solid white' }}>
      <Sub />
    </div>
  );
}
