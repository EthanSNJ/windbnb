import './styles.css';
import LogoSvg from '../assets/logo/logo.svg';
import SearchIcon from '../assets/logo/magnify.svg';

const Home = () => {
  return (
    <div>
      <div className="topBar">
        <img src={LogoSvg} alt="logo" />
        <div className="optionsButton">
          <div className="optionsCity">Helsinki, Finland</div>
          <span className="optionsSeparator" />
          <div className="optionsGuests">Add guests</div>
          <span className="optionsSeparator" />
          <div className="optionsSearchIcon">
            <img
              className="searchIcon"
              src={SearchIcon}
              alt="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
