import * as Styled from "./LightRemoteDeviceCard_style";
import light from "../../assets/light.png";
import remotecontrol from "../../assets/remotecontrol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

export default function LightRemoteDeviceCard({ type, place, initialstate }) {
  return (
    <Styled.Wrapper>
      <Styled.Top>
        <Styled.Icon
          src={type === "light" ? light : remotecontrol}
          alt={type === "light" ? "light" : "remotecontrol"}
        ></Styled.Icon>
        <Styled.InfoText>
          <Styled.PlaceText>서버실 전등</Styled.PlaceText>
          <Styled.StateText>1 켜짐</Styled.StateText>
        </Styled.InfoText>
      </Styled.Top>
      <Styled.Bottom>
        <Styled.Button>
          <FontAwesomeIcon
            icon={type === "power" ? faLightbulb : faTv}
            size="xl"
            color="white"
          />
        </Styled.Button>
      </Styled.Bottom>
    </Styled.Wrapper>
  );
}
