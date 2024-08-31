// pages/index.js
import { useState, useEffect } from 'react';
import LinkForm from '../components/LinkForm';
import LinksList from '../components/LinksList';

export default function Home() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('/api/links')
      .then((res) => res.json())
      .then((data) => setLinks(data.data));
  }, []);

  const saveLink = async (link) => {
    const res = await fetch('/api/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(link),
    });

    const newLink = await res.json();
    setLinks([newLink.data, ...links]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Link Saver</h1>
      <LinkForm onSave={saveLink} />
      <LinksList links={links} />
    </div>
  );
}
