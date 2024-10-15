import { FC } from 'react';
import { IconType } from 'react-icons';
import { roboto } from '../styles/fonts';

type HeadingLevel = 1 | 2;

const headingStyles: Record<HeadingLevel, string> = {
  1: `${roboto.className} text-3xl font-black outline-none`,
  2: 'text-2xl font-bold',
};

const iconStyles: Record<HeadingLevel, string> = {
  1: 'text-3xl',
  2: 'text-2xl',
};

interface HeadingProps {
  id?: string;
  Icon?: IconType;
  level: HeadingLevel;
  text: string;
}

const Heading: FC<HeadingProps> = ({ id, Icon, level, text }) => {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;

  return (
    <div className='flex items-center'>
      {Icon && <Icon className={iconStyles[level]} aria-hidden='true' />}
      <Tag id={id} className={headingStyles[level]} tabIndex={-1}>
        {text}
      </Tag>
    </div>
  );
};

export default Heading;
