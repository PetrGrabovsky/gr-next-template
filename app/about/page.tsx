import { HomeIcon } from '@/shared/data/pageIcons';
import Heading from '@/shared/molecules/Heading';
import PageLayout from '@/shared/templates/PageLayout';
import { FC } from 'react';
import { aboutMetadata } from './aboutMetadata';

export const metadata = aboutMetadata;

const About: FC = () => {
  return (
    <PageLayout headingText='About' Icon={HomeIcon}>
      <section>
        <header>
          <Heading level={2} text='Section 1' />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, esse minima dolorem ipsa
          aliquam repudiandae cumque obcaecati minus. Illum eveniet nam error culpa soluta, vitae
          vel voluptatum impedit nesciunt fugiat.
        </p>
      </section>
    </PageLayout>
  );
};

export default About;
