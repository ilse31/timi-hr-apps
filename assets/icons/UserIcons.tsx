import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const UserIcons = (props: any) => {
  const { width, height, ...otherProps } = props;
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || 36}
      height={height || 36}
      fill='none'
      {...otherProps}
    >
      <G fill='#3587FE'>
        <Path d='M18.5 18a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.5 21c-7.452.008-13.492 6.048-13.5 13.5A1.5 1.5 0 0 0 6.5 36h24a1.5 1.5 0 0 0 1.5-1.5c-.008-7.452-6.048-13.492-13.5-13.5Z' />
      </G>
    </Svg>
  );
};

export default UserIcons;
