import { getSectionAnimation } from '../animations';
import { Button, Wrapper } from '../components';
import { contactSection } from '../utils/portfolio';

const Contact = () => {
  const { subtitle, title, paragraphs, link, buttonText } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button type="link" size="lg" href={link} center className="mt-12">
        {buttonText}
      </Button>
    </Wrapper>
  );
};

export default Contact;
