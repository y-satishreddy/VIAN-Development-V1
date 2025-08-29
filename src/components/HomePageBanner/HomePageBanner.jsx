import BannerVideo from "../../assets/images/home/bannerVideo.mp4";
const HomePageBanner = () => {
  return (
    <>
      <section className="position-relative w-100 vh-100 bg-cement-color">
        <div className="container">
          <video
            autoPlay
            muted
            playsInline
            className="vh-100 w-100 object-fit-cover"
          >
            <source src={BannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default HomePageBanner;
