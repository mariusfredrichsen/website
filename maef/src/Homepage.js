import Background from './Background';
import Menu from './Menu';
import ThemeButton from './ThemeButton';
import './App.css';

const Homepage = () => {
  return (
    <>
      <div style={{ float: "right", margin: "10px" }}>
        <ThemeButton />
      </div>
      <Background></Background>
      <Menu></Menu>
    </>
  );
}

export default Homepage;
