import { useNavigate, Link } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => navigate(-1)}
        className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
      >
        竊・謌ｻ繧・      </button>
      <Link
        to="/"
        className="text-sm px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        繝医ャ繝励・繝ｼ繧ｸ
      </Link>
    </div>
  );
}
