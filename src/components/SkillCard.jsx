import { useState } from "react";
import "../App.css";
import colorSharp from "../assets/img/color-sharp.png";
import css from "../assets/img/css.png";
import figma from "../assets/img/figma.svg";
import html from "../assets/img/html.png";
import rails from "../assets/img/rails.png";
import react from "../assets/img/react.avif";
import rails2 from "../assets/img/rails2.png";
import check from "../assets/img/check.png";

const SkillCard = () => {
  // Les données initiales des groupes de cartes
  const initialGroups = [
    {
      id: 0,
      status: "active",
      cards: [
        {
          id: 1,
          type: "little-card",
          img: figma,
          style: " translate(10%, 3%) rotate(5deg)",
        },
        { id: 2, type: "big-card", img: rails2 },
        { id: 3, type: "little-card", img: css },
        { id: 4, type: "big-card", img: html },
        { id: 5, type: "little-card", img: css },
        { id: 6, type: "big-card", img: react },
        { id: 7, type: "little-card", img: figma },
      ],
    },
    // Ajoutez d'autres groupes si nécessaire
  ];

  const [groups, setGroups] = useState(initialGroups);

  return (
    <div className="card-groups">
      {groups.map((group) => (
        <div
          key={group.id}
          className={`card-group`}
          data-index={group.id}
          data-status={group.status}
        >
          {group.cards.map((card) => (
            <div
              key={card.id}
              className={`${card.type} card`}
              style={{
                backgroundImage: `url(${card.img})`,
                transform: card.style,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
