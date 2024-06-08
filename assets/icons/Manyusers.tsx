import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const ManyUSers = (props: any) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={36}
    fill='none'
    {...props}
  >
    <G clipPath='url(#a)'>
      <Path
        fill='#3587FE'
        d='M18.5 24a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm-9.476 0H2a1.5 1.5 0 0 1-1.5-1.5 9.033 9.033 0 0 1 7.697-8.874 1.499 1.499 0 0 1 1.65 1.899A9.013 9.013 0 0 0 9.5 18c0 1.335.3 2.652.879 3.855A1.5 1.5 0 0 1 9.029 24h-.005ZM26 36H11a1.5 1.5 0 0 1-1.5-1.5 9 9 0 0 1 18 0A1.5 1.5 0 0 1 26 36Zm1.5-24a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm-18 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12ZM35 24h-7.024a1.5 1.5 0 0 1-1.35-2.145 8.905 8.905 0 0 0 .52-6.33 1.5 1.5 0 0 1 1.657-1.899A9.033 9.033 0 0 1 36.5 22.5 1.5 1.5 0 0 1 35 24Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M.5 0h36v36H.5z' />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ManyUSers;
