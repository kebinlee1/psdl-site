import React from "react";
import { Button} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSync,
    // faCamera, faCheckSquare, faSquare, faSpinner, faCircleNotch,  faCog, faStroopwafel,
    // faQuoteLeft, faArrowRight, faSkating, faSkiing, faSkiingNordic, faSnowboarding, faSnowplow
} from '@fortawesome/free-solid-svg-icons'

// import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* {isLoading && <Glyphicon glyph="refresh" className="spinning" />} */}
      {isLoading && <FontAwesomeIcon icon={faSync} spin />} {props.children}
    </Button>
  );
}