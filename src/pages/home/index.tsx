// Styles
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

// Components
import { Project } from "@/components/Project";
import { Stack } from "@/components/Stack";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderButtonsArea,
  HeaderContent,
  ProjectAreaWrapperColumns,
  ProjectsArea,
  ProjectsAreaContent,
  ProjectsAreaSocialMediaMessage,
  StackCards,
  StackSection,
} from "./style";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Transformando ideias em realidade com tecnologia.
            </Text>
            <Text type="body1" color="grey6">
              <p>
                Sou um Desenvolvedor graduado pela Kenzie Academy Brasil com
                experiência em projetos usando metodologias como Scrum.
              </p>
              <p>
                Desde cedo, sempre tive uma paixão por tecnologia e a
                programação intensificou ainda mais essa paixão. Eu sinto uma
                constante necessidade de aprender e evoluir nesta área, o que
                torna a programação uma fonte constante de desafios e satisfação
                para mim.
              </p>
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
