import React, { useState } from "react";
import { Mail, MapPin, Calendar, Edit, Camera } from "lucide-react";
import EditProfileModel from "./EditProfileModel";
export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    role: "Senior Product Designer",
    email: "sarah.johnson@example.com",
    location: "San Francisco, CA",
    joined: "January 2021",
    bio: "Product designer with 5+ years of experience in creating user-centered digital products.",
    avatar:
      "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg",
  });

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setProfile({
      ...profile,
      name: formData.get("name"),
      role: formData.get("role"),
      email: formData.get("email"),
      location: formData.get("location"),
      bio: formData.get("bio"),
    });

    setIsEditing(false);
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden relative">
          <div className="h-40 bg-gradient-to-r from-teal-500 to-emerald-500 relative">
            <div className="absolute -bottom-16 left-8 flex flex-col items-center">
              <div className="relative">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button
                  className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow"
                  title="Change Picture"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Edit Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsEditing(true)}
                style={{ fontFamily: "poppins" }}
                className="flex items-center gap-1 text-[14px]  text-sm px-3 py-1.5 bg-white border-none rounded shadow hover:bg-gray-100"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="pt-20 px-6 pb-6">
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-gray-500">{profile.role}</p>

            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined {profile.joined}</span>
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-gray-600">{profile.bio}</p>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditing && (
          <EditProfileModel
            handleSave={handleSave}
            profile={profile}
            setIsEditing={setIsEditing}
          ></EditProfileModel>
        )}
      </div>
    </div>
  );
}
