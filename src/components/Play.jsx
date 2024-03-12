 import React from 'react';
const Play = ({ onPlay }) => {
  return (
    <svg
      fill="#14cc94"
      height="100px"
      width="100px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 30 30"
      xmlSpace="preserve"
      onClick={onPlay} // Play fonksiyonunu SVG'ye tıklandığında çağırın
      style={{ cursor: 'pointer' }} // Tıklandığında fare imleci el işareti olacak
    >
<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#14CC94"></path> <path d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z" fill="#14CC94"></path> </g>
    </svg>
  );
};

export default Play;



 
