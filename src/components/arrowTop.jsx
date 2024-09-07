import { useEffect } from "react";
import "./arrowTop.scss";

export default function ArrowTop() {
  useEffect(() => {
    const handleScroll = () => {
      const arrow = document.querySelector(".arrowTop");
      if (arrow) {
        if (window.scrollY > 0) {
          arrow.classList.add("visible");
        } else {
          arrow.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#home" className="arrowTop">
      <i className="fas fa-chevron-up"></i>
    </a>
  );
}
