import { useState } from "react";
import s from "./About.module.css";
import { Scrollbar } from "../../ui/Scrollbar/Scrollbar";
import { Code } from "../../components/Code/Code";
import { MenuAccordionAbout } from "../../components/Accordion/MenuAccordionAbout/MenuAccordionAbout";
import { ContentAboutMe } from "../../components/ContentAboutMe/ContentAboutMe";
import iconbio from "./assets/bioIcon.svg";
import iconEd from "./assets/edIcon.svg";
import iconInt from "./assets/intIcon.svg";
import { Bio } from "../../components/Bio/Bio";
import close from "../../components/Code/assets/close.svg";

export const About = () => {
  //хлебные крошки
  const [currentItem, setCurrentItem] = useState([]);

  // состояние для отрисовки div с информацией
  const [contentAbout, setcontentAbout] = useState(<Bio />);

  // состояние для выделения выбранного пункта меню
  const [active, setActive] = useState("bio");

  // массив для отслеживания выбранного меню
  let arr = [
    "bio",
    ["education", ["school", "univers"]],
    ["interests", ["game"]],
    iconbio,
    iconEd,
    iconInt,
  ];

  return (
    <>
      <div className={s.leftAside}>
        <div className={s.leftAsideItem}>
          <img
            src={iconbio}
            alt="icon"
            //подсвечивать соответствующую иконку выброного пункта
            className={active === arr[0] ? s.activeAsideItem : s.AsideItem}
          />
          <img
            src={iconEd}
            alt="icon"
            //подсвечивать соответствующую иконку выброного пункта
            className={
              active === arr[1][0] ||
              active === arr[1][1][0] ||
              active === arr[1][1][1]
                ? s.activeAsideItem
                : s.AsideItem
            }
          />
          <img
            src={iconInt}
            alt="icon"
            className={
              //подсвечивать соответствующую иконку выброного пункта
              active == arr[2][0] || active == arr[2][1]
                ? s.activeAsideItem
                : s.AsideItem
            }
          />
        </div>
        <div className={s.menuAccordion}>
          <MenuAccordionAbout
            title="personal-info"
            setcontentAbout={setcontentAbout}
            active={active} // состояние которое будет отслеживать активный пункт меню
            setActive={setActive}
            arr={arr}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </div>
      </div>
      <div className={s.contentAboutMe}>
        <div className={s.titleContentAboutMe}>
          <span>personal-info</span>
          <img src={close} alt="close" className={s.iconClose} />
        </div>
        <ContentAboutMe contentAbout={contentAbout} />
        <Scrollbar />
      </div>
      <div className={s.rightAside}>
        <Code />
        <Scrollbar />
      </div>
    </>
  );
};

//нумерация строк автоматически
// function numeric(number) {
//   let arr = [];
//   for (let i = 1; i <= number / 27; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// const [size, setSize] = useState({});
// const ref = useRef();

// const resizeHandler = () => {
//   const { clientHeight, clientWidth } = ref.current || {};
//   setSize({ clientHeight, clientWidth });
// };

// useEffect(() => {
//   window.addEventListener("resize", resizeHandler);
//   resizeHandler();
//   return () => {
//     window.removeEventListener("resize", resizeHandler);
//   };
// }, []);

// const arr = numeric(size.clientHeight);

// console.log(size.clientHeight);
