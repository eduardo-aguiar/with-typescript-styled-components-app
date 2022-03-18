import * as React from "react";
import {
  ISelectedSign,
  ITodayResponse,
} from "../../pages/horoscope/[selectedSign]";
import { Button } from "../Button.styled";

const getDateFormatted = (): string => {
  let today = new Date();
  let date =
    today.getDate() +
    "-" +
    (today.getMonth() + 1).toString() +
    "-" +
    today.getFullYear();

  return date;
};

export default function SelectedSignPage(props: ISelectedSign) {
  const [useSelectedPeriod, setUseSelectedPeriod] = React.useState(
    props.todayHoroscope
  );

  const handleClick = (e: any) => {
    e.preventDefault();
    switch (e.target.id) {
      case "yesterday":
        setUseSelectedPeriod(props.yesterdayHoroscope);
        break;

      case "tomorrow":
        setUseSelectedPeriod(props.tomorrowHoroscope);
        break;

      default:
        setUseSelectedPeriod(props.todayHoroscope);
        6;
        break;
    }
    console.log(e.target.id);
  };

  return (
    <div>
      <h1>{useSelectedPeriod.sunsign}</h1>
      <h5>{getDateFormatted()}</h5>
      <p>{useSelectedPeriod.horoscope}</p>
      <Button id="yesterday" variant="primary" onClick={handleClick}>
        Yesterday´s
      </Button>
      <Button id="today" variant="primary" onClick={handleClick}>
        Today's
      </Button>
      <Button id="tomorrow" variant="primary" onClick={handleClick}>
        Tomorrow´s
      </Button>
    </div>
  );
}
