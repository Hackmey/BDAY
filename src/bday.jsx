import React from "react";
import "./styles.css";
import FirstDateImage from "./images/firstdate.jpg";
import awkward from "./images/awkward.jpg";
import dn from "./images/dn.jpg";
import usbest from "./images/usbest.jpg";
import pari from "./images/pari.jpg";
import eyes from "./images/eyes.jpg";
import ears from "./images/ears.jpg";
import hottest from "./images/hottest.jpg";
import dramaqueen from "./images/dramaqueen.jpg";
import chin from "./images/chin.jpg";
import pose from "./images/pose.jpg";
import interview from "./images/interview.jpg";
import juice from "./images/juice.jpg";
import nakhraas from "./images/nakhraas.jpg";
import posing from "./images/posing.jpg";
import untie from "./images/untie.jpg";
import chasmis from "./images/chasmis.jpg";
import backside from "./images/backside.jpg";
import baddass from "./images/baddass.jpg";



const CatwomanBirthday = () => {
  const [showSurprise, setShowSurprise] = React.useState(false);
  const [activeMemory, setActiveMemory] = React.useState(null);
  const [showGift, setShowGift] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = React.useState([]);
  const name = "Jasmin";

  // Define memories data
  const memories = [
    {
      id: 1,
      title: "First Date",
      description: `🌟 Waffles and Whispers 🌟
        In a cozy café, with a Belgian flair,  
        The scent of waffles filled the air.  
        Golden treats with sweetness piled high,  
        A perfect start under a wintery sky.  

        Your smile was warm, your laughter sweet,  
        A melody playing in our retreat.  
        Each bite we shared, a moment to treasure,  
        Waffles and whispers, a timeless pleasure.  

        Powdered sugar dusted like snow,  
        As hearts began to softly glow.  
        Syrup dripped like fleeting time,  
        Yet each second felt so divine.  

        Between the bites, our gazes met,  
        A memory made I’ll never forget.  
        In that café, love softly grew,  
        A sweet beginning, just me and you.
`,
      image: FirstDateImage,
    },
    {
      id: 2,
      title: "Our first awkward photo",
      description: `
        😊A timid glance, a stolen peek,  
        Words so fragile, too shy to speak.  
        Heartbeats race, a thunderous sound,  
        In the quiet where our dreams are found.  

        Your presence near, a gentle glow,  
        A warmth my heart could barely show.  
        The world dissolved when you were near,  
        Yet voicing feelings sparked silent fear.  

        Fingers twitch, a longing touch,  
        But space between feels far too much.  
        In nervous smiles, our hearts align,  
        A love so pure, yet undefined.  

        Beneath the blush, a truth so clear,  
        You're the melody my soul holds dear.  
        Though shyness guards what I convey,  
        Love blooms softly in its own way.😊
`,
      image: awkward,
    },
    {
      id: 3,
      title: "Being the most beautiful",
      description: `Grace in your eyes, A sunrise surprise. Beauty so rare, Beyond compare.`,
      image: dn,
    },
    {
      id: 4,
      title: "Our best photo together",
      description: `Two souls, one story,
In laughter and glory.
Through highs and lows,
Our bond only grows.

Hand in hand, we stride,
A journey side by side.
No need to pretend,
You're my forever, my best friend.`,
      image: usbest,
    },
  ];


  // Define qualities data
  const qualities = [
    { icon: "✨", text: "Your elegance: You move through life with unmatched grace." },
    { icon: "💎", text: "Your wit: Sharp as Catwoman's claws." },
    { icon: "💪", text: "Your strength: You inspire me with your resilience." },
    { icon: "🌙", text: "Your charm: It's as irresistible as a treasure in a vault." },
    { icon: "💜", text: "Your love: It's the most precious jewel of all." },
  ];

  const heroQualities = [
    { 
      title: "Kindness", 
      description: "Your heart, the compass that guides with love.",
      image: "/images/kindness.jpg" 
    },
    { 
      title: "Bravery", 
      description: "Facing challenges with grace and courage.",
      image: "/images/bravery.jpg" 
    },
    { 
      title: "Resilience", 
      description: "Rising stronger after every fall.",
      image: "/images/resilience.jpg" 
    },

  ];
  

  const likesInYou = [
    { icon: "🌟", image: eyes, text: "YOUR EYES" },
    { icon: "💖", image: ears, text: "YOUR EARS" },
    { icon: "💫", image: chin, text: "YOUR CHIN" },
    { icon: "🌈", image: hottest, text: "YOUR BEING THE HOTTEST BODY IN THE UNIVERSE" },
    { icon: "🦄", image: interview, text: "YOU IN FORMAL DRESS" },
    { icon: "💖", image: juice, text: "YUO DRINKING JUICE." },
    { icon: "💫", image: nakhraas, text: "YOUR NAKHRAAS" },
    { icon: "🌟", image: pari, text: "YOU IN TRADITIONAL" },
    { icon: "🦄", image: posing, text: "YOU POSING LIKE A MERMAID" },
    { icon: "💖", image: untie, text: "YOU UNTYING HAIRBAND" },
    { icon: "🌟", image: dramaqueen, text: "YOU BEING A DRAMA QUEEN" },
    { icon: "💖", image: chasmis, text: "YOU BEING A CHASMIS" },
    { icon: "🦄", image: backside, text: "YOUR BACKSIDE" },
    { icon: "🌟", image: baddass, text: "YOU BEING A BADASS" },
    { icon: "💖", image: pose, text: "YOUR ANGELIC FACE" },
  ];

  // Handle mouse movement for interactive effects
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add sparkle effect on click
  const addSparkle = (e) => {
    const newSparkle = { id: Date.now(), x: e.clientX, y: e.clientY };
    setSparkles((prev) => [...prev, newSparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 2000);
  };

  return (
    <div className="min-h-screen" onClick={addSparkle}>
      {/* Sparkle effect layer */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: "fixed",
            left: sparkle.x,
            top: sparkle.y,
            pointerEvents: "none",
            zIndex: 50,
          }}
        >
          <div className="animate-[sparkle_2s_ease-out_forwards] text-2xl">✨</div>
        </div>
      ))}

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-b">
        <div
          className="absolute w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.1) 0%, transparent 20%)`,
          }}
        />
        <div className="text-center z-10 space-y-6">
          <h1 className="text-6xl font-bold text-purple-300 hover:scale-105 transition-transform duration-300">
            🐾 Happy Purr-fect Birthday, {name}! 🐾
          </h1>
          <p className="text-xl text-purple-200">
            Unleashing a day full of love, elegance, and a touch of feline magic, just for you.
          </p>
          <div className="w-8 h-8 mx-auto animate-bounce text-purple-400">↓</div>
        </div>
      </div>



      {/*Memories*/}
      <section className="py-20 px-4 bg-gray-800">
        <h2 className="text-4xl text-center mb-12 text-purple-300">
          🐾 Our Cat-tastic Memories Together 🐾
        </h2>
        <div className="max-w-6xl mx-auto space-y-12">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8`}
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">{memory.title}</h3>
                <p className="text-lg text-gray-200">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Qualities Section */}
      <section className="py-20 px-4 bg-gray-800">
        <h2 className="text-4xl text-center mb-12 text-purple-300">
          💜 The Purr-fect Qualities That Make You Shine 💜
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="group flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:-translate-x-2"
            >
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                {quality.icon}
              </span>
              <p className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">
                {quality.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Likes Section */}
      <section className="py-20 px-4 bg-gray-900">
        <h2 className="text-4xl text-center mb-12 text-purple-300">
          💖 What I Like in You 💖
        </h2>
        <div className="max-w-4xl mx-auto space-y-16">
          {likesInYou.map((like, index) => (
            <div
              key={index}
              className={`group flex items-center space-x-8 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
            >
              {/* Enlarged Image */}
              <div className="relative w-64 h-64 overflow-hidden rounded-full shadow-xl transition-transform duration-500 transform group-hover:scale-115">
                <img
                  src={like.image}
                  alt={like.text}
                  className="w-full h-full object-cover"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-60 rounded-full"></div>
              </div>
              {/* Text Section */}
              <div
                className={`transition-all duration-500 group-hover:scale-105 ${index % 2 === 0 ? "text-left" : "text-right"
                  }`}
              >
                <span className="text-3xl block mb-4">{like.icon}</span>
                <p className="text-2xl font-semibold">{like.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Surprise Section */}

      {/* Hero Qualities Carousel Section */}
      <section className="py-20 px-4 bg-gray-900">
  <h2 className="text-4xl text-center mb-12 text-purple-300">
    💖 Hidden Characters Within You 💖
  </h2>
  <div className="max-w-6xl mx-auto space-y-6">
    <div className="flex justify-center space-x-6">
      {[
        { bgColor: 'bg-black', imgSrc: './images/cat.jpeg', name: 'Catwoman', description: 'Stealthy, fierce, and always one step ahead, Catwoman is the embodiment of independence and mystery.' },
        { bgColor: 'bg-red-600', imgSrc: './images/wanda.gif', name: 'Wanda', description: 'A master of chaos magic, Wanda Maximoff is a powerful sorceress with an unyielding will and heart.' },
        { bgColor: 'bg-purple-600', imgSrc: './images/wonder.gif', name: 'Wonder Woman', description: 'A warrior princess, Wonder Woman fights for justice, peace, and equality, with unmatched strength and courage.' },
        { bgColor: 'bg-pink-600', imgSrc: './images/spidey.gif', name: 'Spider Gwen', description: 'Spider-Gwen, from another dimension, is quick-witted, strong, and determined, fighting for justice with her unique twist.' },
      ].map((card, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-8 rounded-lg ${card.bgColor} text-white w-80 h-112 transform transition-all duration-300 hover:scale-105`}
        >
          <div
            className="w-64 h-64 overflow-hidden rounded-full shadow-lg mb-4 border-4 border-white"
            style={{ backgroundImage: `url(${card.imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <h3 className="text-3xl font-bold mb-2">{card.name}</h3>
          <p className="text-lg text-center">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>








      {/* Footer */}
      <footer className="py-8 px-4 text-center bg-gray-800">
        <p className="text-lg">
          With All My Love, Your Partner in Crime 💎 <br />
          BATMAN

        </p>
        <div className="w-6 h-6 mx-auto mt-4 text-purple-400">❤️</div>
      </footer>
    </div>
  );
};

export default CatwomanBirthday;
