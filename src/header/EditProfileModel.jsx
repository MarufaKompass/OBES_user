import React from 'react'

export default function EditProfileModel({handleSave,profile,setIsEditing}) {
  return (
    <div> <div className="fixed inset-0  bg-black/40	 z-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-md">
      <h2 className="text-lg font-semibold mb-1">Edit Profile</h2>
      <p className="text-sm text-gray-500 mb-4">Make changes and click Save when you're done.</p>
      <form onSubmit={handleSave} className="space-y-4">
        <div className="flex items-center gap-4">
          <label htmlFor="name" className="w-24 text-right text-sm font-medium">Name</label>
          <input name="name" defaultValue={profile.name} className="flex-1 border rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="role" className="w-24 text-right text-sm font-medium">Role</label>
          <input name="role" defaultValue={profile.role} className="flex-1 border rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="email" className="w-24 text-right text-sm font-medium">Email</label>
          <input name="email" type="email" defaultValue={profile.email} className="flex-1 border rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="location" className="w-24 text-right text-sm font-medium">Location</label>
          <input name="location" defaultValue={profile.location} className="flex-1 border rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex items-start gap-4">
          <label htmlFor="bio" className="w-24 text-right text-sm font-medium pt-2">Bio</label>
          <textarea name="bio" rows="3" defaultValue={profile.bio} className="flex-1 border rounded px-3 py-2 text-sm" />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 text-sm bg-teal-600 text-white rounded hover:bg-teal-700">
            Save changes
          </button>
        </div>
      </form>
    </div>
  </div></div>
  )
}
