import { useState, useRef, useCallback } from "react";

const ITEM_HEIGHT = 35;
const CONTAINER_HEIGHT = 500;

export default function DataList({ records }) {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback(() => {
    setScrollTop(containerRef.current.scrollTop);
  }, []);

  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);
  const endIndex = startIndex + visibleCount;

  const visibleItems = records.slice(startIndex, endIndex);

  return (
    <div
      ref={containerRef}
      onScroll={onScroll}
      style={{
        height: CONTAINER_HEIGHT,
        overflowY: "auto",
        border: "1px solid #ccc",
      }}
    >
      {/* IMPORTANT FIX HERE */}
      <div
        style={{
          height: records.length * ITEM_HEIGHT,
          position: "relative",
        }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              top: (startIndex + index) * ITEM_HEIGHT,
              height: ITEM_HEIGHT,
              width: "100%",
              padding: "5px",
              boxSizing: "border-box",
              borderBottom: "1px solid #eee",
            }}
          >
            #{item.id} — {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
