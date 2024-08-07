import React from "react";

const DragHandle = ({ fill = "#000000", height = "18", width = "18" }) => (
  <svg
    version="1.1"
    id="drag_handle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 535.5 535.5"
    width={width}
    height={height}
  >
    <path
      d="M439.721,66.708c0,8.976-1.731,17.442-5.199,25.398c-3.471,7.956-8.061,14.994-13.771,21.114
           c-5.712,6.12-12.546,10.914-20.502,14.382c-7.956,3.468-16.422,5.202-25.396,5.202c-8.979,0-17.442-1.734-25.398-5.202
           c-7.956-3.468-14.892-8.262-20.808-14.382c-5.916-6.12-10.608-13.158-14.076-21.114s-5.202-16.422-5.202-25.398
           s1.734-17.544,5.202-25.704s8.16-15.3,14.076-21.42S341.499,8.67,349.455,5.202C357.411,1.734,365.877,0,374.853,0
           s17.439,1.734,25.396,5.202c7.956,3.468,14.79,8.262,20.502,14.382s10.302,13.26,13.771,21.42
           C437.988,49.164,439.721,57.732,439.721,66.708z M439.721,268.057c0,9.383-1.731,18.053-5.199,26.01
           c-3.471,7.955-8.061,14.891-13.771,20.807s-12.546,10.609-20.502,14.076c-7.956,3.469-16.422,5.203-25.396,5.203
           c-8.979,0-17.442-1.734-25.398-5.203c-7.956-3.467-14.892-8.16-20.808-14.076s-10.608-12.852-14.076-20.807
           c-3.468-7.957-5.202-16.627-5.202-26.01c0-8.977,1.734-17.545,5.202-25.705c3.468-8.16,8.16-15.198,14.076-21.114
           s12.852-10.608,20.808-14.076c7.956-3.468,16.422-5.202,25.398-5.202s17.439,1.734,25.396,5.202
           c7.956,3.468,14.79,8.16,20.502,14.076s10.302,12.954,13.771,21.114C437.988,250.512,439.721,259.08,439.721,268.057z
            M437.885,469.404c0,8.979-1.632,17.34-4.896,25.092s-7.752,14.484-13.464,20.195c-5.712,5.713-12.444,10.201-20.196,13.465
           s-15.912,4.896-24.479,4.896c-8.568,0-16.729-1.635-24.48-4.896c-7.752-3.264-14.484-7.752-20.196-13.465
           c-5.712-5.711-10.198-12.443-13.464-20.195c-3.264-7.752-4.896-16.113-4.896-25.092c0-8.568,1.632-16.729,4.896-24.479
           c3.266-7.752,7.752-14.586,13.464-20.502s12.444-10.51,20.196-13.771c7.752-3.264,15.912-4.896,24.48-4.896
           c8.565,0,16.728,1.633,24.479,4.896s14.484,7.854,20.196,13.771c5.712,5.916,10.2,12.75,13.464,20.502
           S437.885,460.836,437.885,469.404z M226.134,66.708c0,8.976-1.734,17.442-5.202,25.398s-8.058,14.994-13.77,21.114
           s-12.546,10.914-20.502,14.382c-7.956,3.468-16.422,5.202-25.398,5.202s-17.442-1.734-25.398-5.202
           c-7.956-3.468-14.892-8.262-20.808-14.382c-5.916-6.12-10.608-13.158-14.076-21.114s-5.202-16.422-5.202-25.398
           s1.734-17.544,5.202-25.704c3.468-8.16,8.16-15.3,14.076-21.42S127.908,8.67,135.864,5.202S152.286,0,161.262,0
           s17.442,1.734,25.398,5.202s14.79,8.262,20.502,14.382s10.302,13.26,13.77,21.42C224.4,49.164,226.134,57.732,226.134,66.708z
            M226.134,268.057c0,9.383-1.734,18.053-5.202,26.01c-3.468,7.955-8.058,14.891-13.77,20.807s-12.546,10.609-20.502,14.076
           c-7.956,3.469-16.422,5.203-25.398,5.203s-17.442-1.734-25.398-5.203c-7.956-3.467-14.892-8.16-20.808-14.076
           s-10.608-12.852-14.076-20.807c-3.468-7.957-5.202-16.627-5.202-26.01c0-8.977,1.734-17.545,5.202-25.705
           c3.468-8.16,8.16-15.198,14.076-21.114s12.852-10.608,20.808-14.076s16.422-5.202,25.398-5.202s17.442,1.734,25.398,5.202
           s14.79,8.16,20.502,14.076s10.302,12.954,13.77,21.114C224.4,250.512,226.134,259.08,226.134,268.057z M226.134,469.404
           c0,9.383-1.734,18.053-5.202,26.01c-3.468,7.955-8.058,14.895-13.77,20.811s-12.546,10.605-20.502,14.076
           c-7.956,3.467-16.422,5.199-25.398,5.199s-17.442-1.732-25.398-5.199c-7.956-3.471-14.892-8.16-20.808-14.076
           s-10.608-12.855-14.076-20.811c-3.468-7.957-5.202-16.627-5.202-26.01c0-8.977,1.734-17.545,5.202-25.705
           c3.468-8.16,8.16-15.197,14.076-21.113s12.852-10.605,20.808-14.074c7.956-3.471,16.422-5.201,25.398-5.201
           s17.442,1.73,25.398,5.201c7.956,3.469,14.79,8.158,20.502,14.074s10.302,12.953,13.77,21.113
           C224.4,451.859,226.134,460.428,226.134,469.404z"
    />
  </svg>
);

export default DragHandle;
