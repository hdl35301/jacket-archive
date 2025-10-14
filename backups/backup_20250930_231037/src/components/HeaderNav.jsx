import { Link, useNavigate } from "react-router-dom";

export default function HeaderNav() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center gap-4 p-2 bg-gray-100 mb-4">
      <button onClick={goBack} className="text-blue-600 hover:underline">
        竊・謌ｻ繧・      </button>
      <Link to="/" className="text-blue-600 hover:underline">
        繝医ャ繝励・繝ｼ繧ｸ
      </Link>
    </div>
  );
}
