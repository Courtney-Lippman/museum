import React from 'react';
import { useRouter } from 'next/router';

const NotePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note {id}</h1>
      <p>This is the note page for note {id}.</p>
    </div>
  );
};

export default NotePage;
