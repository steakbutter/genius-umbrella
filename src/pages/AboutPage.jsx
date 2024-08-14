// This is a static page mocking an "About Us" section for our fake user data
import profilePic from "../assets/Profile pic Carlos.png"

export default function AboutPage() {
  return (
    <div className="container pt-4">
      <img src={profilePic} alt="Picture of Author" />
      <p> This is a summary about me. I am on a coding bootcamp and this is
        my react portfolio.
      </p>
    </div>
  );
}
