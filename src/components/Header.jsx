?
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Leather Archive</Link>
      <Link to="/" className="text-sm bg-blue-500 px-3 py-1 rounded">トップ�Eージ</Link>
    </header>
  );
}
