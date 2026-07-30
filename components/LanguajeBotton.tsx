import { useLanguage } from "./LanguageProvider";

export default function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="text-white flex gap-2 text-1xl rounded-2xl fixed bottom-5 right-5 p-1 border-1 bg-white border-black" onClick={toggleLanguage}>
       <div className="w-8 h-8">
        <img className="w-full h-full "  src={"len.png"} ></img>
      </div>
      <div className="w-8 h-8">
        <img className="w-full h-full "  src={language === "es" ? "en.png":"spain.png"} ></img>
      </div>
     
      
      
      
    </button>
  );
}