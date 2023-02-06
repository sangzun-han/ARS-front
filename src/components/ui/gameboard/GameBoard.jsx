import styles from "./GameBoard.module.css";
import GameBoardImage from "../../../assets/images/image-game-board.png";
import AvatarImage from "../avatar/AvatarImage";
import ButtonRS from "../button/ButtonRS";
import HalfCircle from "../under-card/HalfCircle";

const GameBoard = () => {
  const peoples = [
    {
      id: "1",
      name: "ada",
      rotate: "180deg",
    },
    {
      id: "2",
      name: "adaasd",
      rotate: "240deg",
    },
    {
      id: "3",
      name: "ada",
      rotate: "300deg",
    },

    {
      id: "4",
      name: "ada",
      rotate: "360deg",
    },

    {
      id: "5",
      name: "ada",
      rotate: "420deg",
    },
    {
      id: "6",
      name: "ada",
      rotate: "480deg",
    },
  ];

  return (
    <>
      <div
        className={styles.game_table}
        style={{ backgroundImage: `url(${GameBoardImage})` }}
      >
        <div className={styles.game_table_settings}>
          {peoples.map((people) => (
            <AvatarImage people={people} key={people.id} />
          ))}
        </div>
        <div className={styles.game_table_buttons}>
          <ButtonRS content="준비" />
        </div>
      </div>
      <HalfCircle />
    </>
  );
};

export default GameBoard;
