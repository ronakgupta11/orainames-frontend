// pages/my-names.js
import Link from 'next/link';

const MyNames = () => {
  const userNames = [
    { name: 'ronak.eth', expiry: 'July 31, 2024' },
    { name: 'john.eth', expiry: 'August 15, 2025' },
    { name: 'crypto.dev', expiry: 'September 10, 2023' },
    // Add more names as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Names</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userNames.map((domain, index) => (
            <Link href={`/names/${domain.name}`} key={index}>
              <div className="card shadow-lg cursor-pointer hover:shadow-2xl transition duration-300">
                <div className="card-body">
                  <h2 className="card-title text-2xl">{domain.name}</h2>
                  <p className="text-gray-600">Expiry: {domain.expiry}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyNames;
