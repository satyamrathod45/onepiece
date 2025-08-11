import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Target date: 12 Aug 2025, 00:00:00
    const targetDate = new Date(2025, 7, 12, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsOpen(true);
        setTimeLeft("");
        return;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isOpen) {
    return (
      <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          {/* Change this to your new video */}
          <source src="https://motionbgs.com/media/6219/thousand-sunny-ship.960x540.mp4" type="video/mp4" />
        </video>

        {/* Theme overlay (keeps your old color tone) */}
        <div className="absolute inset-0 bg-[rgba(15,23,42,0.6)]"></div>

        {/* Countdown Card */}
        <div className="relative z-10 bg-primary text-white px-8 py-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2">
            The site will open on 12 Aug, 00:00 🎉
          </h1>
          <p className="text-4xl font-mono">{timeLeft}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
