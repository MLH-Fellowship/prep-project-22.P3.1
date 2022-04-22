import './footer.css';

function Footer(props) {
  const { src } = props;
  return (
    <footer>
      <div className="footer-content">
        <h3>Weather App</h3>
        <p>
          One stop solution to view the weather at any location, get News alerts
          and updates, and listen to your favorite songs. Provides flexibility
          to toggle the temperature unit (Celsius or Fahrenheit), and weather
          icon and background image changes depending on weather conditions.
        </p>
      </div>
      <div className="footer-bottom">
        Developed with &#10084;&#65039; by{' '}
        <a
          href="https://prep-22-p3-1.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={src} alt="Software Simbas" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
