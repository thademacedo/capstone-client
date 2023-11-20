import "../styles/About.scss";
import Dog from "../assets/images/image4.jpg";

function About() {
  return (
    <div className="info">
      <div className="info-about">
        <h4>ABOUT US</h4>
        <h4>
          Welcome to Woof and Dine - Your Ultimate Guide to Pet-Friendly Dining
          in Metro Vancouver!
        </h4>
        <div className="about-pic">
          <img src={Dog} alt="dog dining" className="about-pic__dog" />
        </div>
        <p>
          Woof and Dine is more than just a website; it's a devoted community
          for dog owners seeking seamless dining experiences in Metro Vancouver.
          Born out of a simple yet significant need, our platform is here to
          cater to the vibrant community of dog lovers who, like you, want to
          explore the city's culinary delights without the worry of leaving
          their four-legged companions behind.
        </p>
        <h4>Why Woof and Dine?</h4>
        <p>
          <strong>- Comprehensive Listings:</strong> Discover a curated list of
          pet-friendly establishments, ensuring you and your furry friend are
          always welcome.
        </p>
        <p>
          <strong>- Community Connection:</strong> Join a community of
          like-minded dog owners who share your passion for good food and great
          company.
        </p>
        <p>
          Our commitment is to empower pet owners to make informed dining
          choices, creating delightful and stress-free experiences for both you
          and your dogs in the beautiful Metro Vancouver. As you embark on a
          culinary adventure, let Woof and Dine be your trusted companion –
          where good food meets great company, paws included!
        </p>
      </div>
      <div className="info-contact">
        <h4>CONTACT INFORMATION</h4>
        <p>
          Have any questions or suggestions? Email us at{" "}
          <strong>contact@woofanddine.ca</strong>
        </p>
      </div>
    </div>
  );
}

export default About;
