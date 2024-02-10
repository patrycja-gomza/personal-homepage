import Header from "../../features/PersonalHomepage/Header";
import ModeSwitch from "../../common/ModeSwitch";
import ArtSkills from "./ArtSkills/index";
import artData from "../ArtPage/artData.json";
import artPhoto from "./images/pgomza-art.jpg";
import emojiPencil from "../../assets/pencil.svg";
import emojiPaint from "../../assets/artistpalette.svg";
import emojiDiamond from "../../assets/diamond.svg";
import { toHomepage } from "../../app/routes";

const ArtPage = () => {
    return (
        <>
            <ModeSwitch />
            <Header
                name={artData.name}
                to={toHomepage()}
                photo={artPhoto}
                description={artData.description}
                isArtPage={true}
            />
            <main>
                <ArtSkills
                    title="Pencil drawings"
                    emoji={emojiPencil}
                    skills={artData.pencilDrawings}
                    isArtPage={true}
                />
                <ArtSkills
                    title="Paint by numbers"
                    emoji={emojiPaint}
                    skills={artData.paintByNumbers}
                    isArtPage={true}
                />
                <ArtSkills
                    title="Diamond painting"
                    emoji={emojiDiamond}
                    skills={artData.diamondPainting}
                    isArtPage={true}
                />
            </main>
        </>
    )
};

export default ArtPage;