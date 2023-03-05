import { motion, SVGMotionProps } from 'framer-motion';

import { colors } from '~/styles/constants';

import Svg from '../../src/components/common/icons/Svg';

export default function HamburgerButton({ toggleIsOpen }: { toggleIsOpen: VoidFunction }) {
  return (
    <button onClick={toggleIsOpen} aria-label="hamburger button">
      <Svg>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          transition={{ duration: 0.2 }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          transition={{ duration: 0.2 }}
        />
      </Svg>
    </button>
  );
}

function Path(props: SVGMotionProps<SVGPathElement>) {
  return (
    <motion.path
      fill={colors.white}
      strokeWidth="3"
      stroke={colors.white}
      strokeLinecap="round"
      {...props}
    />
  );
}
