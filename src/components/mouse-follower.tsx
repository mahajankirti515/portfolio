'use client';
import { useMouse } from '@/hooks/use-mouse';

export function MouseFollower() {
  const [mouse] = useMouse();

  return (
    <>
      {mouse.x !== null && mouse.y !== null && (
        <div
          className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-blue-500 opacity-50 transition-transform duration-75"
          style={{
            left: mouse.x - 8,
            top: mouse.y - 8,
          }}
        />
      )}
    </>
  );
}