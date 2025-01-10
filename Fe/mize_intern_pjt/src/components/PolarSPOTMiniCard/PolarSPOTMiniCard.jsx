import * as Styled from "./PolarSPOTMiniCard_style";
import light from "../../assets/light.png";
import remotecontrol from "../../assets/remotecontrol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faTv,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default function PolarSPOTMiniCard0({ type, place, initialstate }) {
  const location = "대회의실";
  const typeName = "전등";

  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.Icon
          src={type === "light" ? light : remotecontrol}
          alt={type === "light" ? "light" : "remotecontrol"}
        ></Styled.Icon>
        <Styled.InfoText>
          {/* span 태그로 2개하는게 좋을 듯 {Place} {Type} */}
          <Styled.PlaceText>
            {location} {typeName}
          </Styled.PlaceText>
          <Styled.StateText>1 켜짐</Styled.StateText>
        </Styled.InfoText>
      </Styled.Top>
      <Styled.Bottom>
        {/* API 연결하고 갯수만큼, device에 맞게 아이콘 */}
        <Styled.Button>
          <FontAwesomeIcon
            icon={type === "power" ? faLightbulb : faTv}
            size="xs"
            color="white"
          />
        </Styled.Button>
      </Styled.Bottom>
    </Styled.Wrapper>
  );
}
