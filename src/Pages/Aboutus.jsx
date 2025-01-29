import "../CSS/Aboutus.css"

function AboutUs() {
  return (
    <div className="aboutus">
      <h2>About Movie Finder</h2>
      <p>
        Welcome to <span>Movie Finder</span>, your ultimate destination for discovering movies! 
        Our platform helps movie enthusiasts explore a vast collection of films, 
        from timeless classics to the latest blockbusters.
      </p>

      <div className="about-section">
        <h3>🎬 What We Offer</h3>
        <ul>
          <li>✔ Search for movies by title, genre, and year</li>
          <li>✔ View detailed movie descriptions, ratings, and reviews</li>
          <li>✔ Add movies to your favorites for quick access</li>
          <li>✔ Stay updated with trending and upcoming movies</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>🚀 Why Choose Movie Finder?</h3>
        <p>
          We aim to create a seamless and enjoyable movie discovery experience. Whether 
          you're a casual viewer or a hardcore cinephile, our platform is designed 
          to cater to all movie lovers. Join us in celebrating the world of cinema!
        </p>
      </div>

     
    </div>
  );
}

export default AboutUs;
