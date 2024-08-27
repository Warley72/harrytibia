"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ContainerIntroSection,
  ContainerIntroSectionButtons,
  IntroSectionButton,
  ContainerSectionsContainer,
  ContainerIntroSectionText,
} from "./style";

export default function IntroSection() {
  return (
    <ContainerIntroSection>
      <ContainerSectionsContainer>
        <ContainerIntroSectionButtons>
          <Image
            priority
            src="/introSection/hat.png"
            alt="A hat icon"
            width={56}
            height={56}
          />
          <Link href={"#"}>
            <IntroSectionButton>
              <Image
                src="/introSection/playNow.svg"
                alt="Play Now"
                width={113}
                height={28} // Ajuste conforme necessário
              />
            </IntroSectionButton>
          </Link>
        </ContainerIntroSectionButtons>

        <ContainerIntroSectionButtons>
          <Image
            priority
            src="/introSection/playTrailer.png"
            alt="Play Trailer icon"
            width={56}
            height={56}
          />
          <Link href={"#"}>
            <IntroSectionButton>
              <Image
                src="/introSection/watchTrailer.svg"
                alt="Watch Trailer"
                width={170}
                height={28} // Ajuste conforme necessário
              />
            </IntroSectionButton>
          </Link>
        </ContainerIntroSectionButtons>
      </ContainerSectionsContainer>
      <ContainerIntroSectionText>
        <h1>Start of the Magic Journey</h1>
      </ContainerIntroSectionText>
    </ContainerIntroSection>
  );
}
