import Answers from "../Answers";
import Progressbar from "../Progressbar";
import Miniplayer from "../Miniplayer";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>

      <Answers />
      <Answers />
      <Answers />
      <Answers />
      <Progressbar />
      <Miniplayer />
    </>
  );
}
