"use client";

import { updateProfileAction } from "../../../app/profile/actions";

type ProfileFormProps = {
  niche: string;
  primaryPlatform: string;
  followerCount: number;
};

export function ProfileForm({
  niche,
  primaryPlatform,
  followerCount,
}: ProfileFormProps) {
  return (
    <form
      action={updateProfileAction}
      className="space-y-4"
    >
      <div>
        <label htmlFor="niche">
  Niche
</label>

<input
  id="niche"
  name="niche"
  defaultValue={niche}
/>
      </div>

      <div>
        <label htmlFor="primaryPlatform">
  Platform
</label>

<input
  id="primaryPlatform"
  name="primaryPlatform"
  defaultValue={primaryPlatform}
/>
      </div>

      <div>
        <label htmlFor="followerCount">
  Followers
</label>

<input
  id="followerCount"
  type="number"
  name="followerCount"
  defaultValue={followerCount}
/>
      </div>

      <button
        type="submit"
        className="rounded border px-4 py-2"
      >
        Save Changes
      </button>
    </form>
  );
}