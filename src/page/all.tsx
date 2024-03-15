import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const movies: Movie[] = [
  { id: 1, title: 'Tên phim 1', imageUrl: '/vite.svg',description: 'Mô tả phim 1' },
  { id: 2, title: 'Tên phim 2', imageUrl: '/vite.svg',description: 'Mô tả phim 2' },
  { id: 3, title: 'Tên phim 3', imageUrl: '/vite.svg',description: 'Mô tả phim 3' },
  { id: 4, title: 'Tên phim 4', imageUrl: '/vite.svg',description: 'Mô tả phim 4' },
  { id: 5, title: 'Tên phim 5', imageUrl: '/vite.svg',description: 'Mô tả phim 5' },
  { id: 6, title: 'Tên phim 6', imageUrl: '/vite.svg',description: 'Mô tả phim 6' },
];
const All: React.FC = () => {
  const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800">
      <div className="bg-gray-800 text-white w-full">
      <div className="flex flex-col items-center justify-between w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <Link to="/">
            <img className="h-8 w-auto" src="/vite.svg" alt="MoiPhim" />
          </Link>
          <div className="flex-1 max-w-lg mx-4">
            <input type="search" placeholder="Tìm kiếm..." className="w-full px-4 py-2 rounded-md text-black" />
          </div>
          <Link to="/login" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300">
            Đăng nhập
          </Link>
        </div>
        <nav className="flex space-x-10 py-2">
          <Link to="/" className="text-base font-medium text-white hover:text-gray-300">Trang chủ</Link>
          <Link to="" className="text-base font-medium text-white hover:text-gray-300">Thể loại</Link>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Đã hoàn thành</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Phim mới</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Danh sách của tôi</a>
        </nav>
      </div>
    </div>
    </header>
    <main className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Phim mới cập nhật</h2>
          <Link to ="/all" className="text-base font-medium text-white hover:text-gray-300">Xem thêm </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-gray-800 p-4 rounded-lg relative"
              onMouseEnter={() => setHoveredMovie(movie)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <a href="#">
              <img src={movie.imageUrl} alt={movie.title} className="w-full h-auto rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              {hoveredMovie?.id === movie.id && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 rounded-lg">
                  <p className="text-sm">{hoveredMovie.description}</p>
                </div>
              )}
              </a>
            </div>
          ))}
        </div>
        </main>
</div>
)}

export default All;