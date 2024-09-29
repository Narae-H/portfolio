import React, { useState, useRef, useEffect } from 'react';
import '../styles/Tooltip.css';

export const Tooltip = ({ children, content, position = 'bottom', hasArrow = true,  ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target) &&
          triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const { key, ...restProps } = props;

  return (
    <div className="na-tooltip-container" key={key} {...restProps} >
      <div
        ref={triggerRef}
        className="na-tooltip-trigger"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`na-tooltip ${position} ${hasArrow ? 'arrow' : null}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};


