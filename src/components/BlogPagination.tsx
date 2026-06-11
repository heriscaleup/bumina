import Link from "next/link";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

function pageHref(page: number): string {
  return page === 1 ? "/blog" : `/blog/page/${page}`;
}

export default function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex justify-center items-center gap-2 mt-12"
      aria-label="Navigasi halaman blog"
    >
      {currentPage > 1 && (
        <Link
          href={pageHref(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
        >
          ← Sebelumnya
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={pageHref(page)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-lg transition-colors ${
            page === currentPage
              ? "bg-emerald-600 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-emerald-50 hover:text-emerald-700"
          }`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={pageHref(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
        >
          Berikutnya →
        </Link>
      )}
    </nav>
  );
}
