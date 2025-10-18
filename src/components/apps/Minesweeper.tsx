export default function () {
  return (
    <div style="position: relative; width: 100%; height: 100%;">
      <iframe src="https://freeminesweeper.org/" height="100%" width="100%" />
      {/* Overlay div to visually hide top 100px */}
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width:  80px;
          height: 80px ;
          background: #0e0e0e;
          z-index: 1;
        "
      />
      <div
        style="
          position: absolute;
          top: 0;
          right: 0;
          width:  80px;
          height: 80px ;
          background: #0e0e0e;
          z-index: 1;
        "
      />
    </div>
  );
}
