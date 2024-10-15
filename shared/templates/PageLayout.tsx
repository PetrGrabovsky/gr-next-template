import { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import ClientAutoFocusHandler from '../utils/ClientAutofocusHandler';
import Heading from '../molecules/Heading';

const headingId = 'page-heading';

interface PageLayoutProps {
  headingText: string;
  Icon: IconType;
  header?: ReactNode;
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ headingText, Icon, children, header }) => {
  return (
    <>
      <main aria-labelledby={headingId} className='flex-grow'>
        {header ? (
          header
        ) : (
          <header>
            <Heading id={headingId} level={1} Icon={Icon} text={headingText} />
          </header>
        )}
        {children}
      </main>
      <ClientAutoFocusHandler elementId={headingId} />
    </>
  );
};

export default PageLayout;
