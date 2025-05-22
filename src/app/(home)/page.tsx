import Announcements from "@/components/layout/Announcements";
import Footer from "@/components/layout/Footer";
import Game from "@/components/layout/Game";
import Header from "@/components/layout/Header";
export const dynamic = "force-dynamic";
export const fetchCache = 'force-no-store';

const Home = async () => {
  return (
    <section className="relative w-full overflow-hidden h-full">
      <video
        src={"/assets/video/city.mp4"}
        autoPlay
        loop
        muted
        playsInline
        className="z-[-10] object-cover top-0 left-0 absolute"
      />
      <div className="flex flex-col justify-between h-full items-center">
        <Header />
        {/* <Announcements /> */}
        <Game />
        <Footer />
      </div>

    </section>
  );
};

export default Home;