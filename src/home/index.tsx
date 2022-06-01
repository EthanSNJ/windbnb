import './styles.css';
import LogoSvg from '../assets/logo/logo.svg';
import SearchIcon from '../assets/logo/search.svg';

const Home = () => {
  return (
    <div>
      <div className="topBar">
        <div className="optionsButton">
          <div className="optionsCity">Helsinki, Finland</div>
          <div className="optionsSeparator" />
          <div className="optionsGuests">Add guests</div>
          <div className="optionsSeparator" />
        </div>
      </div>
    </div>
  );
};

export default Home;
