'use client';

import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import('@/Component/Editor/Editor'), {
  ssr: false, // Disable server-side rendering
});

export default function Demo() {
  return (
    <div className="w-50 bg-success">
      <TextEditor />
    </div>
  );
}
