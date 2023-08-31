export default function Modal({ show, close }) {
  if (!show) return <></>;

  return (
    <div className="absolute w-screen h-screen bg-black opacity-50 z-20 top-0">
      <div className="absolute z-50 top-1/2 left-1/2 w-96 h-96 bg-white">
        <h1>slkdfjoskdfj</h1>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}
