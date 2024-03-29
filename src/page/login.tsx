import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
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
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Thể loại</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Đã hoàn thành</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Phim mới</a>
          <a href="#" className="text-base font-medium text-white hover:text-gray-300">Danh sách của tôi</a>
        </nav>
        </div>
      </div>
      </header>
    <main>
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg">
        <form className="space-y-4">
          <div className="text-center text-white">
            <h2 className="text-2xl font-semibold">Đăng nhập</h2>
          </div>
          <div>
            <label htmlFor="" className="text-white">
              Tên Đăng Nhập
            </label>
            <input
              type=""
              id=""
              className="w-full p-2 rounded-md"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded-md"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Đăng nhập
          </button>
          <div className="text-center text-white">
            Nếu bạn chư có tài khoản. hãy <Link to="/register" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300 underline">
              Đăng ký
            </Link>
          </div>
        </form>
      </div>
    </div>
    </main>
    <footer className="mt-auto bg-gray-800 p-4">
        <div className="container mx-auto text-center">
          <p>© footer</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Trang Chủ</a>
            <a href="#" className="hover:text-gray-400">Thể Loại</a>
            <a href="#" className="hover:text-gray-400">Liên Hệ</a>
            <a href="#" className="hover:text-gray-400">Về Chúng Tôi</a>
          </div>
        </div>
      </footer>
  </div>
  );
};

export default Login;