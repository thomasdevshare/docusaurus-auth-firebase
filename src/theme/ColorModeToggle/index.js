import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import {logout} from '../firebase';

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <a style={{marginRight: 15, cursor: "pointer", color: '#222222'}} onClick={() => logout(() => window.location.reload())}>
        Logout
      </a>
      <ColorModeToggle {...props} />
    </>
  );
}
