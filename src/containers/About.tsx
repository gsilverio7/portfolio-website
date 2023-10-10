import { getSectionAnimation } from '../animations';
import { HeroImage, Link,ListItem, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { aboutSection, author } from '../utils/portfolio';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Olá, meu nome é Gabriel Silvério. Sou cristão, casado, apaixonado por tecnologia e videogame. 
            O que mais me motiva é poder usar da tecnologia para ajudar as pessoas e tornar sua vida melhor.
          </p>
          <p>
            Comecei a estudar programação em 2019 aprendendo Fortran e depois Python, e nunca mais saí desse mundo.
            Desde 2019 trabalho com desenvolvimento web, utilizando principalmente JavaScript, PHP, Laravel e MySQL. Atualmente estudo Análise e Desenvolvimento de Sistemas pela 
            Universidade de Vassouras.
          </p>
          {/* <p>
            O que me motiva é poder usar da tecnologia para ajudar as pessoas e tornar sua vida melhor.
          </p> */}

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
