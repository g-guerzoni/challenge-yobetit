import React from "react";
import PropTypes from "prop-types";

import palette from "constants/palette";

const Wave = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill={palette["primary"]}
      fill-opacity="1"
      d="M0,224L18.5,234.7C36.9,245,74,267,111,256C147.7,245,185,203,222,160C258.5,117,295,75,332,48C369.2,21,406,11,443,5.3C480,0,517,0,554,10.7C590.8,21,628,43,665,90.7C701.5,139,738,213,775,245.3C812.3,277,849,267,886,240C923.1,213,960,171,997,138.7C1033.8,107,1071,85,1108,85.3C1144.6,85,1182,107,1218,117.3C1255.4,128,1292,128,1329,106.7C1366.2,85,1403,43,1422,21.3L1440,0L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
    ></path>
  </svg>
);

Wave.propTypes = {};

Wave.defaultProps = {};

export default Wave;
