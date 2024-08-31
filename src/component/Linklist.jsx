// components/LinksList.js
export default function LinksList({ links }) {
    return (
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link._id} className="border p-4 rounded-md">
            <h3 className="font-bold text-xl">{link.title}</h3>
            <p>{link.description}</p>
            <a href={link.url} target="_blank" className="text-blue-600 underline">
              {link.url}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  