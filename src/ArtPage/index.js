import Header from "../PersonalHomepage/Header";
import ModeSwitch from "../PersonalHomepage/ModeSwitch";
import Skills from "../PersonalHomepage/Skills";
import { StyledArticle, StyledHeader, PortfolioTitle, ProjectTitle, Tile, Wrapper } from "../PersonalHomepage/Portfolio/styled";
import artData from "./artData.json";
import artPhoto from "./images/pgomza-art.jpg";
import emojiPencil from "./images/pencil.svg";
import emojiPaint from "./images/artistpalette.svg";
import emojiDiamond from "./images/diamond.svg";
import { toHomepage } from "../routes";

const ArtPage = () => {
    const categories = Object.keys(artData);

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
                <Skills
                    title="Pencil drawings"
                    emoji={emojiPencil}
                    skills={artData.pencilDrawings}
                    isArtPage={true}
                />
                <Skills
                    title="Paint by numbers"
                    emoji={emojiPaint}
                    skills={artData.paintByNumbers}
                    isArtPage={true}
                />
                <Skills
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