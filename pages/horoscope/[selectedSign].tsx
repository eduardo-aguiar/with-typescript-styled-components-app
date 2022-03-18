import { useRouter } from "next/router";
import SelectedSignPage from "../../components/SelectedSignPage";
import fetcher from "../../utils/fetcher";

export interface ISelectedSign {
  todayHoroscope: ITodayResponse;
  tomorrowHoroscope: ITodayResponse;
  yesterdayHoroscope: ITodayResponse;
}

const SelectedSign: React.FC<ISelectedSign> = (props) => {
  const router = useRouter();
  const { selectedSign } = router.query;

  return (
    <>
      <SelectedSignPage
        todayHoroscope={props.todayHoroscope}
        yesterdayHoroscope={props.yesterdayHoroscope}
        tomorrowHoroscope={props.tomorrowHoroscope}
      />
    </>
  );
};

export default SelectedSign;

export const getServerSideProps = async (context: any) => {
  console.log(context.params);
  const sunsign = context.params.selectedSign;
  const todayHoroscope = await fetcher<ITodayResponse>(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sunsign}/today`
  );

  const tomorrowHoroscope = await fetcher<ITodayResponse>(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sunsign}/tomorrow`
  );

  const yesterdayHoroscope = await fetcher<ITodayResponse>(
    `http://sandipbgt.com/theastrologer/api/horoscope/${sunsign}/yesterday`
  );

  return {
    props: {
      todayHoroscope: todayHoroscope,
      tomorrowHoroscope: tomorrowHoroscope,
      yesterdayHoroscope: yesterdayHoroscope,
    },
  };
};

export interface ITodayResponse {
  sunsign: string;
  credit: string;
  date: string;
  horoscope: string;
  meta: Meta;
}

export interface Meta {
  mood: string;
  keywords: string;
  intensity: string;
}
