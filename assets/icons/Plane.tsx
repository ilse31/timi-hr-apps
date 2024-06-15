import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
const Planes = (props: SvgProps) => (
  <Svg fill='none' {...props}>
    <G clipPath='url(#a)'>
      <Path
        fill='#3587FE'
        d='M92.476 3.528a11.864 11.864 0 0 0-11.2-3.2l-64 13.48A19.98 19.98 0 0 0 5.864 47.732l6.872 6.868a3.998 3.998 0 0 1 1.172 2.832v12.672a11.862 11.862 0 0 0 1.2 5.14l-.032.028.104.104a12.001 12.001 0 0 0 5.448 5.424l.104.104.028-.032a11.862 11.862 0 0 0 5.14 1.2h12.672A4 4 0 0 1 41.4 83.24l6.868 6.868A19.85 19.85 0 0 0 62.348 96a20.2 20.2 0 0 0 6.42-1.056A19.733 19.733 0 0 0 82.144 79l13.5-64.14a11.9 11.9 0 0 0-3.168-11.332ZM18.4 48.952l-6.876-6.868a11.76 11.76 0 0 1-2.888-12.296 11.912 11.912 0 0 1 10-8.104L82 8.344 21.9 68.452v-11.02a11.91 11.91 0 0 0-3.5-8.48Zm55.884 28.68a12 12 0 0 1-20.356 6.848l-6.88-6.88a11.91 11.91 0 0 0-8.476-3.512h-11.02L87.66 14 74.284 77.632Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h96v96H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Planes;