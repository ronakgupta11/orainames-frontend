import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// import dummyProfileData from './path-to-dummyProfileData';

const ENSProfile = () => {
  const router = useRouter();
  const { ens } = router.query;
  const [profileData, setProfileData] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const dummyProfileData = {
    ensName: "ronak.eth",
    avatarUrl: "/images/default-avatar.png", // Replace with an actual image path
    address: "0x0cbc...11003",
    status: "Expired",
    expiryDate: "October 29, 2024, 23:35:52 GMT+5:30",
    profileInfo: {
      name: "Ronak Patel",
      description: "Blockchain enthusiast and developer. Passionate about decentralized technologies.",
      website: "https://ronak.dev",
      email: "ronak@example.com",
      twitter: "@ronak_eth",
    },
    records: {
      contentHash: "ipfs://Qm...abc",
      textRecords: {
        email: "ronak@example.com",
        url: "https://ronak.dev",
        avatar: "https://example.com/avatar.png",
        description: "Ronak's ENS profile.",
      },
    },
    ownership: {
      owner: "0x0cbc...11003",
      manager: "ronak.eth",
      expiry: "July 31, 2024",
      parent: "eth",
      subdomains: ["sub1.ronak.eth", "sub2.ronak.eth"],
    },
  };
  
  // export default dummyProfileData;
  
  useEffect(() => {
    // For now, we use dummy data
    setProfileData(dummyProfileData);

    // Uncomment below if you fetch data from API
    // if (ens) {
    //   fetch(`/api/ens/${ens}`)
    //     .then(response => response.json())
    //     .then(data => setProfileData(data))
    //     .catch(error => console.error('Error fetching profile data:', error));
    // }
  }, [ens]);

  if (!profileData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center space-x-4">
              <img
                src={profileData.avatarUrl || '/default-avatar.png'}
                alt="Profile Avatar"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-semibold">{profileData.ensName}</h2>
                <p className="text-gray-600">{profileData.address}</p>
              </div>
            </div>
            <div>
              <span className="bg-yellow-500 text-white text-sm px-2 py-1 rounded">
                {profileData.status}
              </span>
            </div>
          </div>

          <div className="border-t">
            <div className="flex justify-center space-x-8 p-4">
              <button
                className={`tab ${activeTab === 'profile' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button
                className={`tab ${activeTab === 'records' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('records')}
              >
                Records
              </button>
              <button
                className={`tab ${activeTab === 'ownership' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('ownership')}
              >
                Ownership
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'profile' && (
              <div>
                <h3 className="text-xl font-semibold">Profile Info</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <span className="font-bold w-24">Name:</span>
                    <span>{profileData.profileInfo.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">Description:</span>
                    <span>{profileData.profileInfo.description}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">Website:</span>
                    <a href={profileData.profileInfo.website} className="text-blue-500 hover:underline">
                      {profileData.profileInfo.website}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">Email:</span>
                    <a href={`mailto:${profileData.profileInfo.email}`} className="text-blue-500 hover:underline">
                      {profileData.profileInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">Twitter:</span>
                    <a href={`https://twitter.com/${profileData.profileInfo.twitter}`} className="text-blue-500 hover:underline">
                      {profileData.profileInfo.twitter}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'records' && (
              <div>
                <h3 className="text-xl font-semibold">Records</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <span className="font-bold w-32">Content Hash:</span>
                    <span>{profileData.records.contentHash}</span>
                  </div>
                  {Object.entries(profileData.records.textRecords).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <span className="font-bold w-32">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ownership' && (
              <div>
                <h3 className="text-xl font-semibold">Ownership</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <span className="font-bold w-32">Owner:</span>
                    <span>{profileData.ownership.owner}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-32">Manager:</span>
                    <span>{profileData.ownership.manager}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-32">Expiry:</span>
                    <span>{profileData.ownership.expiry}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-32">Parent:</span>
                    <span>{profileData.ownership.parent}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-32">Subdomains:</span>
                    <span>{profileData.ownership.subdomains.join(', ')}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENSProfile;
