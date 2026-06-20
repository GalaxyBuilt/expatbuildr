import { useState, useEffect } from 'react';

/**
 * Hook to listen for a secret key sequence (Shift + Shift + X)
 * Returns a boolean that toggles every time the sequence is typed.
 */
export function useSecretTrigger() {
  const [isActivated, setIsActivated] = useState(false);
  const [keys, setKeys] = useState([]);
  const sequence = ['Shift', 'Shift', 'x'];
  
  // Mobile tap tracking
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyChar = e.key;
      const newKeys = [...keys, keyChar].slice(-3);
      setKeys(newKeys);

      if (
        newKeys[0] === 'Shift' &&
        newKeys[1] === 'Shift' &&
        (newKeys[2] === 'x' || newKeys[2] === 'X')
      ) {
        setIsActivated(prev => !prev);
        if (typeof window !== 'undefined') {
          localStorage.setItem('devMode', 'true');
        }
        setKeys([]);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length !== 1) return;

      const touch = e.touches[0];
      const { innerWidth, innerHeight } = window;

      // Check if tap is in bottom-right corner (50x50 area)
      const isBottomRight =
        touch.clientX > innerWidth - 50 &&
        touch.clientY > innerHeight - 50;

      if (isBottomRight) {
        const now = Date.now();
        if (now - lastTapTime < 1000) {
          const newCount = tapCount + 1;
          if (newCount >= 3) {
            setIsActivated(prev => !prev);
            if (typeof window !== 'undefined') {
              localStorage.setItem('devMode', 'true');
            }
            setTapCount(0);
          } else {
            setTapCount(newCount);
          }
        } else {
          setTapCount(1);
        }
        setLastTapTime(now);
      }
    };

    let shakeStartTime = null;
    let lastMotionTime = null;
    const SHAKE_THRESHOLD = 30;
    const REQUIRED_SHAKE_DURATION = 10000; // 10 seconds
    const MOTION_TIMEOUT = 1000; // reset if no motion for 1 second

    const handleDeviceMotion = (e) => {
      const accel = e.acceleration;
      if (!accel) return;

      const magnitude = Math.sqrt(
        accel.x * accel.x +
        accel.y * accel.y +
        accel.z * accel.z
      );

      const now = Date.now();

      if (magnitude > SHAKE_THRESHOLD) {
        // Start tracking shake duration
        if (shakeStartTime === null) {
          shakeStartTime = now;
        }

        // Check if 10 seconds of continuous shaking has been detected
        if (now - shakeStartTime >= REQUIRED_SHAKE_DURATION) {
          setIsActivated(prev => !prev);
          if (typeof window !== 'undefined') {
            localStorage.setItem('devMode', 'true');
          }
          shakeStartTime = null; // Reset after triggering
          lastMotionTime = null;
        }

        lastMotionTime = now;
      } else {
        // No shake detected
        if (lastMotionTime !== null && now - lastMotionTime > MOTION_TIMEOUT) {
          // Reset shake tracking if no motion for 1 second
          shakeStartTime = null;
          lastMotionTime = null;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('devicemotion', handleDeviceMotion);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('devicemotion', handleDeviceMotion);
    };
  }, [keys, tapCount, lastTapTime]);

  return isActivated;
}
