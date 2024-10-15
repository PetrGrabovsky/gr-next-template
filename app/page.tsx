import { HomeIcon } from '@/shared/data/pageIcons';
import { FC } from 'react';
import Heading from '@/shared/molecules/Heading';
import PageLayout from '@/shared/templates/PageLayout';

const Home: FC = () => {
  return (
    <PageLayout headingText='Home' Icon={HomeIcon}>
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
      <section>
        <header>
          <Heading level={2} text='Section 2' />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, possimus magni
          voluptas sed in temporibus rerum. Illo dignissimos quam, beatae expedita assumenda sequi
          iste, officiis libero possimus, sapiente nesciunt ipsum!
        </p>
      </section>
      <section>
        <header>
          <Heading level={2} text='Section 3' />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, possimus magni
          voluptas sed in temporibus rerum. Illo dignissimos quam, beatae expedita assumenda sequi
          iste, officiis libero possimus, sapiente nesciunt ipsum!
        </p>
      </section>
      <section>
        <header>
          <Heading level={2} text='Section 4' />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, possimus magni
          voluptas sed in temporibus rerum. Illo dignissimos quam, beatae expedita assumenda sequi
          iste, officiis libero possimus, sapiente nesciunt ipsum!
        </p>
      </section>
    </PageLayout>
  );
};

export default Home;
