import * as Styled from "./Home_style";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import PowerOccupancyDeviceCard from "../../components/PowerOccupancyDeviceCard/PowerOccupancyDeviceCard";

export default function Home() {
  return (
    <Styled.HomeWrapper>
      <Styled.Header>
        <Styled.Title>마이즈</Styled.Title>
      </Styled.Header>
      <Filter />
      <PowerOccupancyDeviceCard
        type="occupancy"
        place="대회의실"
        initialstate={true}
      />
      <PowerOccupancyDeviceCard
        type="power"
        place="대회의실"
        initialstate={false}
      />
    </Styled.HomeWrapper>
  );
}
