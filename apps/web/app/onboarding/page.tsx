import { createProfileAction } from "./actions";

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        action={createProfileAction}
        className="flex w-full max-w-md flex-col gap-4"
      >
        <h1 className="text-2xl font-bold">
          Complete Your Profile
        </h1>

        <select
          name="niche"
          required
        >
          <option value="">
            Select Niche
          </option>

          <option value="Fitness">
            Fitness
          </option>

          <option value="Finance">
            Finance
          </option>

          <option value="Education">
            Education
          </option>

          <option value="Lifestyle">
            Lifestyle
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Technology">
            Technology
          </option>

          <option value="Gaming">
            Gaming
          </option>

          <option value="Business">
            Business
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <select
          name="primaryPlatform"
          required
        >
          <option value="">
            Select Platform
          </option>

          <option value="Instagram">
            Instagram
          </option>

          <option value="YouTube">
            YouTube
          </option>

          <option value="TikTok">
            TikTok
          </option>

          <option value="LinkedIn">
            LinkedIn
          </option>

          <option value="X">
            X
          </option>
        </select>

        <input
          type="number"
          name="followerCount"
          placeholder="Follower Count"
          required
        />

        <button type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}