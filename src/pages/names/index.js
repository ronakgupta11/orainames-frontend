// pages/search-names.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SearchNames = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to simulate fetching name status from an API
  const fetchNameStatus = async (name) => {
    // Simulating an API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulated logic: if the name contains "eth" it is taken, else available
        if (name.includes('eth')) {
          resolve({ name, status: 'taken' });
        } else {
          resolve({ name, status: 'available' });
        }
      }, 500);
    });
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm) {
        setLoading(true);
        const generatedNames = generateNames(searchTerm);
        const statusPromises = generatedNames.map((name) => fetchNameStatus(name));
        const statuses = await Promise.all(statusPromises);
        setSuggestions(statuses.slice(0, 5)); // Display up to 5 suggestions
        setLoading(false);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  // Function to generate possible domain names
  const generateNames = (term) => {
    return [
      `${term}.orai`,
      `${term}123.orai`,
      `my${term}.orai`,
      `${term}dev.orai`,
      `${term}app.orai`,
      // Add more variations as needed
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Search for Names</h1>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Search for a name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {loading && <p>Loading suggestions...</p>}
          <ul className="list-none">
            {suggestions.map((domain, index) => (
              <Link href={`/names/${domain.name}`}>
              <li
                key={index}
                className={`flex justify-between p-4 rounded-lg cursor-pointer ${
                  domain.status === 'taken' ? 'bg-red-100' : 'bg-green-100'
                }`}
              >
                <span className="font-semibold">{domain.name}</span>
                <span
                  className={`badge ${
                    domain.status === 'taken' ? 'badge-error' : 'badge-success'
                  }`}
                >
                  {domain.status === 'taken' ? 'Taken' : 'Available'}
                </span>
              </li>
              </Link>

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchNames;
