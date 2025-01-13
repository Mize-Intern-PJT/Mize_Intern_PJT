import * as Styled from "./Home_style";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import PlugPresenceCard from "../../components/PlugPresenceCard/PlugPresenceCard";
import PolarSPOTMiniCard from "../../components/PolarSPOTMiniCard/PolarSPOTMiniCard";
import EnvironmentalSensorCard from "../../components/environmentalSensorCard/environmentalSensorCard";
import Devices from "./devices/Devices";

export default function Home() {
  return (
    <Styled.HomeWrapper>
      <Styled.Header>
        <Styled.Title>마이즈</Styled.Title>
      </Styled.Header>
      <Filter />
      <Devices></Devices>
    </Styled.HomeWrapper>
  );
}
