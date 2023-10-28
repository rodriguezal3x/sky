import React from "react";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import HdIcon from "@mui/icons-material/Hd";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import SettingsIcon from "@mui/icons-material/Settings";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { BoxInstance,ContainerFm, Heading, LayoutFm,} from "./styles/About.elements";
import Title2 from "../Title2";
import Title3 from "../Title3";

const About = () => {
  return (
    <LayoutFm>
      <Heading>
        <Title2>TV Satelital de Alta Definición</Title2>
        <p className="paragran">
          "Disfruta de imágenes nítidas y sonido envolvente. Tu
          entretenimientoen su máxima expresión, en cualquier lugar. La mejor
          calidad de TV Satelital, a tu alcance."
        </p>
      </Heading>
      <ContainerFm>
        {/* variedad */}
        <BoxInstance>
          <ConnectedTvIcon style={{ color: "#2b3bd1" }} />
          <Title3>Variedad</Title3>
          <p className="paragran">
            Explora una amplia variedad de canales lo mejor en deportes,
            películas, noticias, entretenimiento, animados y mucho más.
          </p>
        </BoxInstance>
        {/* Calidad */}
        <BoxInstance>
          <HdIcon style={{ color: "#da3125" }} />
          <Title3>Calidad</Title3>
          <p className="paragran">
            Disfruta de la máxima calidad con imágenes y sonido en alta
            definición (HD) para una experiencia visual y auditiva excepcional.
          </p>
        </BoxInstance>
        {/* cobertura */}
        <BoxInstance>
          <SatelliteAltIcon style={{ color: "#2EC5CE" }} />
          <Title3>Cobertura</Title3>
          <p className="paragran">
            Nuestra red de cobertura abarca todo el país, asegurando que puedas
            disfrutar de nuestros servicios en cualquier rincón de la nación.
          </p>
        </BoxInstance>
        {/* aplicacion */}
        <BoxInstance>
          <PhonelinkRingIcon style={{ color: "#2EC5CE" }} />
          <Title3>Aplicaciónes</Title3>
          <p className="paragran">
            Accede a tu entretenimiento favorito en cualquier momento y lugar a
            través de nuestras aplicaciones móviles, al igual que Sky App y Blue
            To Go
          </p>
        </BoxInstance>
        {/* Soporte Tecnico  */}
        <BoxInstance>
          <SettingsIcon style={{ color: "#8C30F5" }} />
          <Title3>Soporte Técnico</Title3>
          <p className="paragran">
            Nuestro equipo de soporte técnico está disponible las 24 horas del
            día, los 7 días de la semana, para brindarte asistencia inmediata y
            confiable.
          </p>
        </BoxInstance>
        {/* Precio */}
        <BoxInstance>
          <MonetizationOnIcon style={{ color: "#3d9c4a" }} />
          <Title3>Precios</Title3>
          <p className="paragran">
            Ofrecemos precios accesibles en colones, sin aumentos sorpresa, para
            que disfrutes de nuestro servicio de alta calidad sin preocupaciones
            económicas
          </p>
        </BoxInstance>
      </ContainerFm>
    </LayoutFm>
  );
};

export default About;
