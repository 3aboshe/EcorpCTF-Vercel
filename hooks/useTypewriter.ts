
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 30, onComplete?: () => void) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    if (text) {
        setDisplayText('');
        setIsComplete(false);
        const typingInterval = setInterval(() => {
          if (i < text.length) {
            setDisplayText(prevText => prevText + text.charAt(i));
            i++;
          } else {
            clearInterval(typingInterval);
            setIsComplete(true);
            if (onComplete) {
              onComplete();
            }
          }
        }, speed);

        return () => {
          clearInterval(typingInterval);
        };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return { displayText, isComplete };
};
