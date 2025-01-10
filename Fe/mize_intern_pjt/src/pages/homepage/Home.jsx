import * as Styled from "./Home_style";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import PlugPresenceCard from "../../components/PlugPresenceCard/PlugPresenceCard";
import PolarSPOTMiniCard from "../../components/PolarSPOTMiniCard/PolarSPOTMiniCard";
import EnvironmentalSensorCard from "../../components/environmentalSensorCard/environmentalSensorCard";
import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <Styled.HomeWrapper>
      <Styled.Header>
        <Styled.Title>마이즈</Styled.Title>
      </Styled.Header>
      <Filter />
      <Card></Card>
      <PlugPresenceCard type="occupancy" place="대회의실" initialstate={true} />
      <PlugPresenceCard type="power" place="대회의실" initialstate={false} />
      <PolarSPOTMiniCard
        type="light"
        place="대회의실"
        initialstate={true}
      ></PolarSPOTMiniCard>

      <PolarSPOTMiniCard
        type="remote"
        place="대회의실"
        initialstate={true}
      ></PolarSPOTMiniCard>
      <EnvironmentalSensorCard></EnvironmentalSensorCard>
    </Styled.HomeWrapper>
  );
}
