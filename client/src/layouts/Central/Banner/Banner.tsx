import "./Banner.style.scss";

function Banner() {
  return (
    <div className="Banner">
      <img src="/raven-cartoon.png.webp" alt="logo" />
      <div className="Banner__seperator"></div>
      <div className="Banner__title">Carleton Central</div>
    </div>
  );
}

export default Banner;
